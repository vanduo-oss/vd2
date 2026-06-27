import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Wires the framework search helper against `root`. Sources registered with
 * `VanduoSearch.register()` are independent of mounting; the composable is a
 * thin lifecycle hook so vd2 consumers can mount sources alongside a search
 * overlay container.
 *
 * Per-source `fetch` functions are defined by the caller (see
 * `src/stores/search.ts` for the default vd2 sources). This composable does
 * NOT manage source registration — that happens in app-level code so the
 * registry outlives any single component instance.
 */
export function useSearch(root: Ref<HTMLElement | null>): void {
  const init = (): void => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      VanduoSearch?: { list: () => ReadonlyArray<unknown> };
    };
    if (w.VanduoSearch) {
      // Touch list() to ensure the global exists; no DOM wiring needed at the
      // root level — the overlay (GlobalSearchModal) reads from the registry.
      w.VanduoSearch.list();
    }
    // Suppress unused-arg lint: the root ref is part of the public contract so
    // future versions can scope registration if needed.
    void root;
  };

  const teardown = (): void => {
    // No-op: registry is process-global. See note above.
  };

  onMounted(init);
  onUnmounted(teardown);
}
