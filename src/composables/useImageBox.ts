import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoImageBox.init(root)` from
 * `framework/js/components/image-box.js`: scans `root` for `.vd-image-box`
 * elements and wires hover-reveal caption + click-to-zoom behaviour. The
 * framework global handles per-instance state; this composable wires on mount
 * and tears down on unmount via `destroyAll()`.
 */
export function useImageBox(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoImageBox?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mounted = true;
    if (w.VanduoImageBox && typeof w.VanduoImageBox.init === "function") {
      w.VanduoImageBox.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as {
      VanduoImageBox?: { destroyAll: () => void };
    };
    if (w.VanduoImageBox && typeof w.VanduoImageBox.destroyAll === "function") {
      w.VanduoImageBox.destroyAll();
    }
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
