import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoTimeline.init(root)` from
 * `framework/js/components/timeline.js`: scans `root` for `.vd-timeline`
 * containers and wires scroll-driven reveal animations. The framework global
 * handles per-instance state; this composable wires on mount and tears down on
 * unmount via `destroyAll()`.
 */
export function useTimeline(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoTimeline?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mounted = true;
    if (w.VanduoTimeline && typeof w.VanduoTimeline.init === "function") {
      w.VanduoTimeline.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as {
      VanduoTimeline?: { destroyAll: () => void };
    };
    if (w.VanduoTimeline && typeof w.VanduoTimeline.destroyAll === "function") {
      w.VanduoTimeline.destroyAll();
    }
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
