import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces the framework's `VanduoTabs.init()` in Vue: wires
 * `[data-tab-target]` tab links inside each `.vd-tabs` container to toggle
 * `.is-active` on the clicked link and its matching `.vd-tab-pane`.
 */
export function useTabs(root: Ref<HTMLElement | null>): void {
  const cleanups: Array<() => void> = [];

  onMounted(() => {
    const el = root.value;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".vd-tabs").forEach((tabs) => {
      const links = tabs.querySelectorAll<HTMLElement>(
        ".vd-tab-link[data-tab-target]",
      );
      links.forEach((link) => {
        const onClick = (): void => {
          if (link.classList.contains("disabled")) return;
          const targetId = link.getAttribute("data-tab-target");
          if (!targetId) return;
          tabs.querySelectorAll(".vd-tab-link").forEach((l) => {
            l.classList.remove("is-active");
            l.setAttribute("aria-selected", "false");
          });
          tabs
            .querySelectorAll(".vd-tab-pane")
            .forEach((p) => p.classList.remove("is-active"));
          link.classList.add("is-active");
          link.setAttribute("aria-selected", "true");
          tabs
            .querySelector(`#${CSS.escape(targetId)}`)
            ?.classList.add("is-active");
        };
        link.addEventListener("click", onClick);
        cleanups.push(() => link.removeEventListener("click", onClick));
      });
    });
  });

  onUnmounted(() => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  });
}
