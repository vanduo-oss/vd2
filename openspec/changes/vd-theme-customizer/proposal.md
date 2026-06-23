# Proposal: vd-theme-customizer

## Why

vd2 already has `VdThemeSwitcher` (in the navbar) and
`VdThemeCustomizer` (in `App.vue`'s overlays), but neither has a
documentation page. This change adds two pages that show how to
embed the switcher in custom UIs and how to use the customizer
panel.

## What Changes

### New pages (2)

- `src/pages/components/ThemeSwitcher.vue` — demonstrates embedding
  `VdThemeSwitcher` in a custom UI (not just the navbar). Shows the
  current theme via a reactive ref.
- `src/pages/components/ThemeCustomizer.vue` — demonstrates
  `VdThemeCustomizer` triggered from a button. The customizer
  panel is a portal-rendered overlay; the page owns the open/close
  state.

### nav.ts and router.ts

- New `Theme` category added with 2 sections: Theme switcher,
  Theme customizer.
- `src/router.ts` extended with 2 new page imports and route
  entries.

## Capabilities

### New Capabilities

- `theme-customizer`: 2 documentation pages.

### Modified Capabilities

_None._

## Impact

- 2 new pages added; visual-parity spec grows from 56 to 58 routes.
- No new Vd* components.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P2-1 (guides) bucket.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
