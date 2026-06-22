## ADDED Requirements

### Requirement: theme-mutates-html-data-attrs
`useTheme()` MUST mutate five `<html>` data attributes based on the
user's persisted preference: `data-theme`, `data-primary`,
`data-neutral`, `data-radius`, `data-font`.

#### Scenario: setTheme applies data-theme
- **WHEN** the user picks "dark" from `VdThemeSwitcher`
- **THEN** `<html data-theme="dark">` is set on the next tick

#### Scenario: setPrimary applies data-primary
- **WHEN** the user picks a primary swatch in `VdThemeCustomizer`
- **THEN** `<html data-primary="<value>">` is set

### Requirement: theme-persists-across-reloads
The selected theme MUST persist to `localStorage` under the key
`vanduo-theme-preference` and re-apply on page load.

#### Scenario: reload restores preference
- **WHEN** the user reloads the page after changing theme
- **THEN** the saved preference is applied without a flash

### Requirement: no-localstorage-during-ssr
`useTheme()` MUST NOT access `localStorage` during SSR pre-rendering.
Reads and writes only run on the client, gated by `onMounted` or a
`typeof window !== 'undefined'` check.

#### Scenario: ssr pass does not touch localStorage
- **WHEN** `vite-ssg` invokes the factory on the server
- **THEN** no `localStorage.getItem` call is made

### Requirement: switcher-menu-variant
`VdThemeSwitcher` MUST expose a menu variant with `role="menu"`
items that have `role="menuitemradio"` and a `data-theme-value`
attribute. The "cycle" and "select" variants are deferred to a
follow-up change.

#### Scenario: menu items carry data-theme-value
- **WHEN** the menu is open
- **THEN** every theme option has a `data-theme-value` matching the
  theme name and a `role="menuitemradio"` attribute

### Requirement: customizer-controls-five-axes
`VdThemeCustomizer` MUST expose controls for theme, primary, neutral,
radius, and font. Each control updates the corresponding `<html>`
data attribute through the `useTheme` API.

#### Scenario: changing radius updates html
- **WHEN** the user adjusts the radius slider
- **THEN** `<html data-radius="<value>">` is updated and persisted