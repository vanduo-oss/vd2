import { onMounted, onUnmounted, type Ref } from "vue";

type Validator = (value: string, param: string) => boolean;

/** Rule validators — ported verbatim from `framework/js/components/validate.js`. */
const rules: Record<string, Validator> = {
  required: (v) => v.trim().length > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  url: (v) => {
    try {
      new URL(v);
      return true;
    } catch {
      return false;
    }
  },
  number: (v) => !isNaN(parseFloat(v)) && isFinite(Number(v)),
  min: (v, p) => v.length >= parseInt(p, 10),
  max: (v, p) => v.length <= parseInt(p, 10),
  minVal: (v, p) => parseFloat(v) >= parseFloat(p),
  maxVal: (v, p) => parseFloat(v) <= parseFloat(p),
  pattern: (v, p) => {
    try {
      if (p.length > 100) return false;
      return new RegExp(p).test(v);
    } catch {
      return false;
    }
  },
  // Vanilla validate.js looks up by [name]; the docs API + demo reference an
  // element id (`match:val-pass`). Honor both so the demo actually works.
  match: (v, p) => {
    try {
      const esc = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(p) : p;
      const other =
        document.getElementById(p) ??
        document.querySelector<HTMLInputElement>(`[name="${esc}"]`);
      return other ? v === (other as HTMLInputElement).value : false;
    } catch {
      return false;
    }
  },
};

const messages: Record<string, string> = {
  required: "This field is required",
  email: "Please enter a valid email address",
  url: "Please enter a valid URL",
  number: "Please enter a valid number",
  min: "Minimum {0} characters required",
  max: "Maximum {0} characters allowed",
  minVal: "Value must be at least {0}",
  maxVal: "Value must be at most {0}",
  pattern: "Invalid format",
  match: "Fields do not match",
};

let errSeq = 0;

function setFieldState(field: HTMLInputElement, errors: string[]): void {
  const wrapper = field.closest(".vd-form-group") ?? field.parentElement;
  if (!wrapper) return;
  let errorEl = wrapper.querySelector<HTMLElement>(".vd-validate-error");

  field.classList.remove("is-valid", "is-invalid");

  if (errors.length > 0) {
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    if (!errorEl) {
      errorEl = document.createElement("div");
      errorEl.className = "vd-validate-error";
      errSeq += 1;
      errorEl.id = `vd-err-${errSeq}`;
      errorEl.setAttribute("role", "alert");
      wrapper.appendChild(errorEl);
    }
    errorEl.textContent = errors[0] ?? "";
    errorEl.style.display = "";
    field.setAttribute("aria-describedby", errorEl.id);
  } else if (field.value.trim()) {
    field.classList.add("is-valid");
    field.removeAttribute("aria-invalid");
    if (errorEl) errorEl.style.display = "none";
  } else {
    field.removeAttribute("aria-invalid");
    if (errorEl) errorEl.style.display = "none";
  }
}

/**
 * Reproduces `VanduoValidate.init()`: scans `root` for `[data-vd-validate]` /
 * `.vd-validate` forms and wires declarative, attribute-driven validation
 * (rules piped on `data-vd-rules`, modes blur/input/submit, custom
 * `data-vd-msg-*` messages, `.is-valid`/`.is-invalid` + `.vd-validate-error`).
 * Honors per-field `data-vd-validate-mode` overrides, as the docs document.
 */
export function useValidate(root: Ref<HTMLElement | null>): void {
  const cleanups: Array<() => void> = [];

  const validateField = (field: HTMLInputElement): boolean => {
    const rulesStr = field.getAttribute("data-vd-rules") ?? "";
    const fieldRules = rulesStr.split("|").map((r) => r.trim()).filter(Boolean);
    const value = field.value;
    const errors: string[] = [];

    for (const rule of fieldRules) {
      const [name, ...params] = rule.split(":");
      const param = params.join(":");
      const validator = name ? rules[name] : undefined;
      if (validator && !validator(value, param)) {
        const customMsg = name ? field.getAttribute(`data-vd-msg-${name}`) : null;
        let msg = customMsg ?? (name ? messages[name] : undefined) ?? "Invalid";
        if (param) msg = msg.replace("{0}", param);
        errors.push(msg);
        break;
      }
    }

    setFieldState(field, errors);
    return errors.length === 0;
  };

  const initForm = (form: HTMLFormElement): void => {
    const formMode = form.getAttribute("data-vd-validate-mode") ?? "blur";
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement>("[data-vd-rules]"),
    );

    const validateAll = (): boolean => {
      let valid = true;
      fields.forEach((f) => {
        if (!validateField(f)) valid = false;
      });
      return valid;
    };

    fields.forEach((field) => {
      const mode = field.getAttribute("data-vd-validate-mode") ?? formMode;
      if (mode === "input" || mode === "blur") {
        const eventType = mode === "input" ? "input" : "blur";
        const handler = (): boolean => validateField(field);
        field.addEventListener(eventType, handler);
        cleanups.push(() => field.removeEventListener(eventType, handler));

        if (mode === "blur") {
          const inputClear = (): void => {
            if (
              field.classList.contains("is-invalid") ||
              field.classList.contains("is-valid")
            ) {
              validateField(field);
            }
          };
          field.addEventListener("input", inputClear);
          cleanups.push(() => field.removeEventListener("input", inputClear));
        }
      }
    });

    const submitHandler = (e: Event): void => {
      const valid = validateAll();
      if (!valid) {
        e.preventDefault();
        e.stopPropagation();
        form.querySelector<HTMLElement>(".is-invalid")?.focus();
      }
      form.dispatchEvent(
        new CustomEvent("validate:submit", { detail: { valid }, bubbles: true }),
      );
    };
    form.addEventListener("submit", submitHandler);
    cleanups.push(() => form.removeEventListener("submit", submitHandler));
  };

  onMounted(() => {
    const el = root.value;
    if (!el) return;
    el.querySelectorAll<HTMLFormElement>("[data-vd-validate], .vd-validate").forEach(
      initForm,
    );
  });

  onUnmounted(() => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  });
}
