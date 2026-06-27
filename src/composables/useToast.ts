import { ref } from "vue";
import { defineStore } from "pinia";

export type ToastType = "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface ToastEntry {
  id: string;
  message: string;
  title?: string;
  type?: ToastType;
  duration: number;
  position: ToastPosition;
  dismissible: boolean;
  showProgress: boolean;
  solid: boolean;
}

export interface ToastOptions {
  message?: string;
  title?: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  dismissible?: boolean;
  showProgress?: boolean;
  solid?: boolean;
}

/** Mirrors `Toast.defaults` in `framework/js/components/toast.js`. */
const DEFAULTS = {
  duration: 5000,
  position: "top-right" as ToastPosition,
  dismissible: true,
  showProgress: true,
  solid: false,
};

let counter = 0;
const nextId = (): string => {
  counter += 1;
  return `toast-${Date.now().toString(36)}-${counter}`;
};

export const useToastStore = defineStore("toast", () => {
  const queue = ref<ToastEntry[]>([]);

  /**
   * Reproduces `Toast.show()` — supports the framework's flexible signature:
   * `show('msg')`, `show('msg', 'success', 3000)`, `show('msg', { … })`,
   * and `show({ message, type, … })`.
   */
  const show = (
    options: ToastOptions | string,
    type?: ToastType | ToastOptions,
    duration?: number,
  ): string => {
    let opts: ToastOptions;
    if (typeof options === "string") {
      if (type && typeof type === "object") {
        opts = { ...type, message: options };
      } else {
        opts = {
          message: options,
          type: type as ToastType | undefined,
          duration,
        };
      }
    } else {
      opts = { ...options };
    }

    const id = nextId();
    const entry: ToastEntry = {
      id,
      message: opts.message ?? "",
      title: opts.title,
      type: opts.type,
      duration: opts.duration ?? DEFAULTS.duration,
      position: opts.position ?? DEFAULTS.position,
      dismissible: opts.dismissible ?? DEFAULTS.dismissible,
      showProgress: opts.showProgress ?? DEFAULTS.showProgress,
      solid: opts.solid ?? DEFAULTS.solid,
    };
    queue.value.push(entry);
    return id;
  };

  const dismiss = (id: string): void => {
    queue.value = queue.value.filter((t) => t.id !== id);
  };

  const success = (message: string, opts: ToastOptions = {}): string =>
    show({ ...opts, message, type: "success" });
  const error = (message: string, opts: ToastOptions = {}): string =>
    show({ ...opts, message, type: "error" });
  const warning = (message: string, opts: ToastOptions = {}): string =>
    show({ ...opts, message, type: "warning" });
  const info = (message: string, opts: ToastOptions = {}): string =>
    show({ ...opts, message, type: "info" });

  return { queue, show, dismiss, success, error, warning, info };
});

export const useToast = () => {
  const store = useToastStore();
  return {
    show: store.show,
    dismiss: store.dismiss,
    success: store.success,
    error: store.error,
    warning: store.warning,
    info: store.info,
    queue: store.queue,
  };
};
