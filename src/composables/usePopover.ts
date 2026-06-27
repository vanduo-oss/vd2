import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Wires the framework's bubble/popover component over `root`. The shipped
 * framework registers this as `bubble` (`window.VanduoBubble`) and scans for
 * `[data-vd-bubble]` / `[data-vd-popover]` triggers — building the panel from
 * attributes (`data-vd-bubble`, `-title`, `-placement`). This composable calls
 * `init(root)` on mount and tears down on unmount via `destroyAll()`.
 */
export function usePopover(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoBubble?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mounted = true;
    if (w.VanduoBubble && typeof w.VanduoBubble.init === "function") {
      w.VanduoBubble.init(r);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(r);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as {
      VanduoBubble?: { destroyAll: () => void };
    };
    if (w.VanduoBubble && typeof w.VanduoBubble.destroyAll === "function") {
      w.VanduoBubble.destroyAll();
    }
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
