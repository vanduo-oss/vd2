# Proposal: vd-core-foundation

## Why

The framework's design system is documented in 6 core pages in the
docs site: color palette, typography, icons, golden ratio, grid
system, and shadows & glow. vd2 had no equivalent content — the
"core" category in `src/nav.ts` was a placeholder. This change
moves the docs's core content to vd2 SFCs, served at
`/core/<topic>`.

## What Changes

### New pages (6)

- `src/pages/core/ColorPalette.vue` — 4 palettes (primary, success,
  warning, error) with 3-10 shade swatches each. Each swatch is a
  card with the token name and hex value.
- `src/pages/core/Typography.vue` — 7-step size scale (xs to 3xl)
  with sample text and token reference. 4 weight rows (normal,
  medium, semibold, bold).
- `src/pages/core/Icons.vue` — 30 Phosphor icon samples in a grid
  (house, user, gear, star, heart, magnifier, bell, envelope,
  calendar, clock, tag, bookmark, chart, check, x, plus, minus,
  arrow, caret, list, sidebar, squares, paint-brush, sun, moon,
  circle-half, shapes, cube, browser).
- `src/pages/core/GoldenRatio.vue` — 4 ratio cards (1:1.618,
  1:1.414, 1.618:1, 21:9) with description, plus 3 visual example
  cards (Card 320×200, Hero 480×300, Banner 800×200).
- `src/pages/core/GridSystem.vue` — breakpoint table (xs to 2xl)
  with min/max, plus a 12-column grid demo.
- `src/pages/core/ShadowsGlow.vue` — 5 shadow sizes (xs to xl) with
  token name and CSS value.

### nav.ts and router.ts

- New `Core` tab added with a single `Foundation` category
  containing 6 sections.
- `src/router.ts` extended with 6 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `core-foundation`: 6 explanation pages.

### Modified Capabilities

_None._

## Impact

- 6 new pages added; visual-parity spec grows from 47 to 53 routes.
- No new Vd* components.
- No new framework CSS — pages use existing tokens (`--vd-color-*`,
  `--vd-shadow-*`, `--vd-font-*`).
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P1-2 (effects), P1-3 (theme-customizer), P2-1 (guides) buckets.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
