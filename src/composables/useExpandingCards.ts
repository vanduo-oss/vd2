import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoExpandingCards.init(root)` from
 * `framework/js/components/expanding-cards.js`: scans `root` for
 * `.vd-expanding-cards` containers and wires the click-to-expand behaviour
 * (one card expands to fill, others shrink to a thumbnail strip). The framework
 * global handles per-container state; this composable wires on mount and tears
 * down on unmount via `destroyAll()`.
 */
export function useExpandingCards(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoExpandingCards?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mounted = true;
    if (
      w.VanduoExpandingCards &&
      typeof w.VanduoExpandingCards.init === "function"
    ) {
      w.VanduoExpandingCards.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as {
      VanduoExpandingCards?: { destroyAll: () => void };
    };
    if (
      w.VanduoExpandingCards &&
      typeof w.VanduoExpandingCards.destroyAll === "function"
    ) {
      w.VanduoExpandingCards.destroyAll();
    }
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
