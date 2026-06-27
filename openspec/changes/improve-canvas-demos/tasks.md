# Tasks

Interactive canvas demo upgrades. Batch 1 = hex; later batches extend
the same template to Charts and Flowchart.

## 1. Hex Grid demo (`/canvas/hex`)

- [x] 1.1 Rewrite `src/pages/canvas/Hex.vue` live demo: 8/4 layout, sliders
      (size 10–50, width 5–30, height 5–20, rotation -180–180°), Reset +
      Fill Random buttons, zoom toolbar overlay with % readout.
- [x] 1.2 Wire `@ready` for imperative API; `@select` for info panel (coords,
      pixel x/y, adjacent count); `@zoom` for zoom label sync.
- [x] 1.3 Parity-plus: Generate Terrain, terrain-type picker on selected hex,
      path mode (start/end click → BFS over existing hexes, highlighted chain +
      connector line), coord-label toggle via `setCustomRender`.
- [x] 1.4 Theme-aware fill palette on `@ready`; watch theme store for
      re-render on theme/primary change.
- [x] 1.5 Update Vue3/vanilla usage snippets and API tables (fix terrain
      casing, remove bogus `off()`).

## 2. OpenSpec + tests

- [x] 2.1 Add `openspec/changes/improve-canvas-demos/` (proposal, design,
      tasks, README, spec delta).
- [x] 2.2 Extend `tests/unit/hex.spec.ts` — mount Hex page (or demo
      controls) and assert sliders + info panel render.

## 3. Verification

- [x] 3.1 `pnpm run typecheck` green.
- [x] 3.2 `pnpm test` green.
- [x] 3.3 `pnpm run build` green.
- [ ] 3.4 Manual compare `/canvas/hex` vs legacy `docs/` hex demo.

## 4. Future batches (out of scope for batch 1)

- [ ] 4.1 Charts interactive demo controls.
- [ ] 4.2 Flowchart editor toolbar parity.
