## Why

`docs-pages-1to1` ported the hex grid page as a static `<VdHexGrid>` with
fixed props — no sliders, zoom toolbar, selection panel, or terrain/path
showcases. The legacy `docs/` site had a full interactive demo wired in
`demos.js`. Ecosystem packages (`@vanduo-oss/hex-grid`, charts,
flowchart) ship rich imperative APIs that static mounts cannot demonstrate.
This change restores legacy parity and adds parity-plus highlights so
vd2 docs teach dual-engine integration properly.

## What Changes

- Rebuild `/canvas/hex` as an interactive demo: size/width/height/rotation
  sliders, Reset + Fill Random, zoom toolbar with % readout, selected-hex
  info panel, terrain generation + per-hex terrain picker, pathfinding
  mode, and coordinate-label toggle.
- Wire the demo through `@vanduo-oss/hex-grid/vue` props + `@ready`
  imperative API; replicate legacy theme-aware fill palette.
- Update usage snippets and API tables on the hex page for accuracy.
- Extend unit tests for the new demo chrome.
- Document the reusable interactive-demo template in `design.md` for
  future Charts/Flowchart batches.

## Capabilities

### New Capabilities

- `interactive-demos`: canvas ecosystem pages expose live controls,
  toolbars, and info panels that drive the package API interactively.

### Modified Capabilities

- `page-parity` (from `docs-pages-1to1`): hex canvas page moves from
  static mount to full interactive parity-plus demo.

## Impact

- `src/pages/canvas/Hex.vue` — major rewrite of the live demo section.
- `tests/unit/hex.spec.ts` — extended assertions.
- No new runtime deps. Validation: `vue-tsc`, `vitest`, `vite-ssg build`.
- Charts/Flowchart interactive upgrades deferred to later batches in
  `tasks.md`.
