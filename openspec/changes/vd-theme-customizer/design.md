# Design: vd-theme-customizer

## Page-by-page layout

| Page | Render path | Notes |
|---|---|---|
| Theme switcher | A `VdThemeSwitcher` instance embedded in a card with the current theme displayed as text. Reactive `current` ref via `useThemeStore()`. | Demonstrates the switcher as a standalone component, not just in the navbar. |
| Theme customizer | A "Open customizer" button that toggles a `VdThemeCustomizer` overlay. Customizer is a Teleport-based component. | Demonstrates the open/close state pattern. |

## Cross-cutting decisions

- **No new components** — both pages reuse `VdThemeSwitcher` and
  `VdThemeCustomizer` from `src/overlays/`.
- **Theme switcher page uses the existing Pinia store** — the
  `useThemeStore()` composable already exposes `theme()` and
  `setTheme()`. The page just reads `theme()` for display.
- **Theme customizer page uses local state for open/close** — the
  `VdThemeCustomizer` is mounted when `open` is true and emits
  `close` when dismissed. Simpler than wiring the customizer into
  a global store.

## Cascade ordering convention

No new CSS rules.
