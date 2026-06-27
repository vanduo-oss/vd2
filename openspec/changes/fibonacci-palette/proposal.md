# Proposal: fibonacci-palette

## Why

vd2 is the soon-to-be-default docs site for the Vanduo framework, but its
color story still presents Open Color as *the* foundation (the home
`#open-color` section and the `/core/color-palette` page both lead with it,
with cyan shown as the brand primary). Now that the framework ships a
golden-angle **Fibonacci palette as the default** with Open Color as an
opt-in, the docs must lead with Fibonacci and present Open Color as the
optional alternative — and let visitors switch palettes live.

## What Changes

### Theme plumbing

- `src/composables/useTheme.ts` + `src/stores/theme.ts`: add `palette` to
  `ThemePreference`, defaulting to core's `DEFAULTS.PALETTE`, applied as
  `data-palette` on `<html>` and persisted under `vanduo-palette`.
- `src/overlays/VdThemeCustomizer.vue`: add a palette selector
  (Fibonacci / Open Color) driven by `PALETTE_OPTIONS` from core.

### Docs content

- `src/pages/core/ColorPalette.vue`: lead with the Fibonacci palette
  (driven by core `tokens` so it stays in sync), showcase the golden
  accent track, and add an "Open Color (optional)" section.
- `src/pages/home.vue`: reframe the `#open-color` section as the Fibonacci
  palette (golden-angle / phi narrative, golden-ratio link), Open Color
  noted as optional.
- Copy consistency in `src/pages/components/ThemeCustomizer.vue` and
  `src/pages/guides/CssVariables.vue`.

### Dependency

- Point `@vanduo-oss/framework` at the local workspace build so the new
  palette CSS reaches the docs site.

## Capabilities

### New Capabilities

- `palette-selector`: live Fibonacci/Open Color switching in the docs.

### Modified Capabilities

- `core-foundation`: the color-palette page leads with Fibonacci.

## Impact

- Visual-parity baselines for `/` and `/core/color-palette` change.
- `useTheme` unit tests extended for the palette dimension.
- No new routes.

## Out of scope

- Remote pushes / publishing.

## Linked changes

- `core/openspec/changes/fibonacci-palette/` — token source + generator.
- `framework/openspec/changes/2026-06-27-fibonacci-palette/` — engine support.
