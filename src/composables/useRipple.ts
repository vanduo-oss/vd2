import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoRipple.init(root)` from `framework/js/components/ripple.js`:
 * adds a click-spawned ripple element to any element matching `.vd-ripple`
 * (or with the attribute `data-vd-ripple`). The framework global owns the
 * per-element state and cleanup, so this composable simply wires the root on
 * mount and lets the framework tear down on unmount via `destroyAll(root)`.
 */
export function useRipple(root: Ref<HTMLElement | null>): void {
  let mountedRoot: HTMLElement | null = null;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoRipple?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mountedRoot = r;
    if (w.VanduoRipple && typeof w.VanduoRipple.init === "function") {
      w.VanduoRipple.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      VanduoRipple?: { destroyAll: () => void };
    };
    if (w.VanduoRipple && typeof w.VanduoRipple.destroyAll === "function") {
      w.VanduoRipple.destroyAll();
    }
    mountedRoot = null;
    void mountedRoot;
  };

  onMounted(init);
  onUnmounted(teardown);
}
