# vd2 Capability Completion — Design

## Composable shape

Every new composable follows the same pattern (mirrors `useFlow`, `useTabs`,
etc.):

```ts
export function useXxx(root: Ref<HTMLElement | null>): void {
  let mounted = false;

  const init = (): void => {
    const r = root.value;
    if (!r || typeof window === "undefined") return;
    const w = window as unknown as { Vanduo?: { init: (root: HTMLElement) => void };
                                    VanduoXxx?: { init: (root: HTMLElement) => void;
                                                  destroyAll: () => void } };
    mounted = true;
    if (w.VanduoXxx) w.VanduoXxx.init(r);
    else if (w.Vanduo) w.Vanduo.init(r);
  };

  const teardown = (): void => {
    if (typeof window === "undefined" || !mounted) return;
    const w = window as unknown as { VanduoXxx?: { destroyAll: () => void } };
    if (w.VanduoXxx) w.VanduoXxx.destroyAll();
    mounted = false;
  };

  onMounted(init);
  onUnmounted(teardown);
}
```

Rationale:
- We do NOT re-implement the framework's per-instance logic; the framework
  already owns the state Map and the listeners. vd2's composable is a thin
  mount/unmount hook.
- The `Vanduo.init(root)` fallback covers the case where the framework bundle
  is loaded but `VanduoXxx` isn't (yet) registered (e.g. during a partial
  bundle).
- `mounted` guard prevents teardown races if `init()` never ran.

## Page shape

Each new page follows the established pattern (`pages/components/Flow.vue`):
`<DocsLayout>` + a `<section id="...">` + demo card(s) with
`<DocCodeSnippet>` + `<EngineSwitch>` for vanilla/vue3 wiring + API/CSS-var
tables + accessibility notes.

## Router + nav wiring

`router.ts`:
- Import each new page SFC.
- Add entry to `componentPages` map (keyed by section id matching the nav).

`nav.ts`:
- Insert each new entry into the correct category (Core / Feedback / Data
  display / Interactive / Media).

## Visual parity baselines

Each new route gets a Playwright snapshot at 1440×900 captured by
`tests/e2e/visual-parity.spec.ts`. Threshold: `maxDiffPixelRatio: 0.03`.

## Bundle-size budget

Total gzipped JS growth from this change is targeted at < 25 KB (Vue SFCs +
composables, before minification). Heavy pages (draggable, search) MAY be
moved to async route chunks if the budget is exceeded.