import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoSpotlight.init(root)` from
 * `framework/js/components/spotlight.js`: scans `root` for `.vd-spotlight`
 * containers and wires the click-to-spotlight / dismiss behaviour. The
 * framework global handles per-instance state; this composable wires on mount
 * and tears down on unmount via `destroyAll()`.
 */
export function useSpotlight(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoSpotlight?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mounted = true;
    if (w.VanduoSpotlight && typeof w.VanduoSpotlight.init === "function") {
      w.VanduoSpotlight.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as {
      VanduoSpotlight?: { destroyAll: () => void };
    };
    if (
      w.VanduoSpotlight &&
      typeof w.VanduoSpotlight.destroyAll === "function"
    ) {
      w.VanduoSpotlight.destroyAll();
    }
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
