import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoDropdown.init(root)` from `framework/js/components/dropdown.js`:
 * scans `root` for `.vd-dropdown` containers, wires toggle / menu / keyboard /
 * outside-click / typeahead, and tears down on unmount.
 *
 * The framework JS already exposes a global, so we do NOT re-implement the
 * logic. Instead, `init(root)` is called once on mount; the framework's own
 * lifecycle (registered via `Vanduo.register('dropdown', …)`) handles each
 * dropdown's per-instance wiring, and `VanduoDropdown.destroyAll()` runs on
 * unmount so Vue's patch-driven DOM doesn't leave stale listeners behind.
 *
 * Notes:
 *   - The framework tracks instances in a Map keyed by the `.vd-dropdown`
 *     element. Vue's diffing may re-use the same element across re-renders,
 *     so calling `init` twice is safe (the Map dedupes).
 *   - `VanduoDropdown.destroyAll()` is the canonical teardown path called from
 *     `Vanduo.destroy(root)`.
 */
export function useDropdown(root: Ref<HTMLElement | null>): void {
  let mountedRoot: HTMLElement | null = null;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const scope = r as unknown as HTMLElement;
    const w = window as unknown as {
      Vanduo?: { init: (root: HTMLElement) => void };
      VanduoDropdown?: {
        init: (root: HTMLElement) => void;
        destroyAll: () => void;
      };
    };
    mountedRoot = scope;
    if (w.VanduoDropdown && typeof w.VanduoDropdown.init === "function") {
      w.VanduoDropdown.init(scope);
    } else if (w.Vanduo && typeof w.Vanduo.init === "function") {
      w.Vanduo.init(scope);
    }
  };

  const teardown = (): void => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      VanduoDropdown?: { destroyAll: () => void };
    };
    if (w.VanduoDropdown && typeof w.VanduoDropdown.destroyAll === "function") {
      w.VanduoDropdown.destroyAll();
    }
    mountedRoot = null;
    void mountedRoot;
  };

  onMounted(() => {
    init();
  });

  onUnmounted(() => {
    teardown();
  });
}
