# Proposal: vd-effects

## Why

The framework ships three effects CSS modules — glass (frosted
backdrop blur), morph (shape-morphing animation), and parallax
(scroll-driven background offset) — that vd2 had not yet
documented. These are content-driven pages that use existing
framework classes (`vd-glass*`, `vd-morph*`, `vd-parallax*`).

## What Changes

### New pages (3)

- `src/pages/effects/Glass.vue` — 4 variants (`vd-glass`,
  `vd-glass-contrast`, `vd-glass-light`, `vd-glass-dark`) on a
  colorful gradient background. Includes an in-use example with a
  button on a glass surface.
- `src/pages/effects/Morph.vue` — 3 morph variants (`vd-morph`,
  `vd-morph-blur`, `vd-morph-rotate`) as cards.
- `src/pages/effects/Parallax.vue` — single parallax demo with
  `vd-parallax`, `vd-parallax-bg`, and `vd-parallax-content`
  layered on a gradient background.

### nav.ts and router.ts

- New `Effects` category added under the `components` tab (since
  the effects are framework primitives that ship with the
  components library). 3 sections: Glass, Morph, Parallax.
- `src/router.ts` extended with 3 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `effects`: 3 explanation pages.

### Modified Capabilities

_None._

## Impact

- 3 new pages added; visual-parity spec grows from 53 to 56
  routes.
- No new Vd* components.
- No new framework CSS.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P1-3 (theme-customizer), P2-1 (guides) buckets.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
