## Context

vd2 canvas pages (`/canvas/hex`, `/canvas/charts`, `/canvas/flowchart`)
currently mount ecosystem components with hardcoded props. The legacy
`docs/` hex demo (`sections/canvas/vd-hex.html` + `js/modules/demos.js`)
had a full control panel. `@vanduo-oss/hex-grid` ships vanilla core +
optional `./vue` bindings; zoom, terrain, and pathfinding are imperative
instance methods, not props.

## Interactive canvas demo template

```
<vd-row>
  <vd-col-lg-8>  <!-- canvas column -->
    <div class="hex-demo-container" style="position:relative; height:420px">
      <VdHexGrid v-bind="gridProps" @ready @select @zoom />
      <div class="canvas-toolbar"> zoom out | % | zoom in | reset view </div>
    </div>
  </vd-col>
  <vd-col-lg-4>  <!-- controls column -->
    sliders (size, width, height, rotation)
    action buttons (reset, fill random, generate terrain)
    toggles (path mode, coord labels)
    terrain picker (select hex first)
  </vd-col>
</vd-row>
<vd-card v-if="selected"> Selected Hex info panel </vd-card>
```

**Props vs instance split:**

| Control | Mechanism |
|---------|-----------|
| size, width, height, rotation | Reactive refs → `<VdHexGrid>` props (Vue watchers call setters) |
| zoom in/out, reset view, fill random, terrain, path | `@ready` → stored instance |
| selection info | `@select` handler |

## Gotchas (load-bearing)

1. **Do not call `instance.reset()`** when props drive size/dimensions —
   it mutates internal state out of sync with Vue refs. Reset refs to
   defaults and call `instance.resetView()` for pan/zoom only.
2. **`pan` event** is emitted only on `resetView()`, not during drag-pan.
3. **Terrain values** use display names (`'Grassland'`), not enum keys
   (`'GRASSLAND'`).
4. **Theme re-render:** patch `_getThemeColors` on `@ready` for
   transparent-fill + primary-outline aesthetic; watch theme store
   (`theme`, `primary`) to re-apply fills after theme flip.
5. **Path highlight:** call `getPath(start, end)` then `setHexFill` on
   each step; clear previous path fills before drawing a new one.
6. **Coord labels:** `setCustomRender` draws on every hex; call
   `clearCustomRender` when toggled off.

## Goals / Non-Goals

**Goals:** hex demo at or above legacy `docs/` fidelity; parity-plus
terrain/path/labels; accurate API snippets; unit test coverage for demo
chrome; reusable template documented for future canvas batches.

**Non-Goals:** changing `@vanduo-oss/hex-grid` package code; Charts/
Flowchart interactive upgrades in batch 1; extracting shared toolbar
component until a second canvas page needs it.

## Batch plan

| Batch | Page | Scope |
|-------|------|-------|
| 1 | `/canvas/hex` | Full interactive parity-plus (this change) |
| 2 | `/canvas/charts` | TBD — chart type/data controls |
| 3 | `/canvas/flowchart` | TBD — editor toolbar parity |
