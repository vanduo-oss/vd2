# Design: vd-layout-navigation

## Naming decisions

### `VdWaypoint` vs `VdScrollspy`

The framework ships `vd-waypoint-nav`, `vd-waypoint-border`,
`vd-waypoint-pill`, and `vd-waypoint-underline` (in
`framework/dist/vanduo.min.css`). The docs site calls the
corresponding section `/components/scrollspy`. The Vue component
follows the framework's vocabulary (`VdWaypoint.vue`); the route and
page follow the docs's vocabulary (`/components/scrollspy`,
`Scrollspy.vue`). The page title is "Waypoint (Scrollspy)" so the
docs's mental model is preserved.

### `VdSidenav` is the framework's slide-out drawer, not vd2's docs sidebar

The framework's `.vd-sidenav` family is a slide-out panel (mobile
drawer pattern). vd2's own `VdSidebar.vue` (under `src/layout/`) is
a different concept — the persistent left navigation in
`DocsLayout.vue` that uses the `vd-sidebar` class vocabulary. The
two are unrelated and use different class names to avoid confusion.

### V2 of `VdFooter` and `VdNavbar`

`VdFooter` v1 had hard-coded copyright + 3 hardcoded legal links.
V2 accepts a `sections` prop for multi-column content. The default
behavior (no `sections` passed) renders just the copyright row,
preserving v1's API for callers that don't need columns. The
copyright row is always present (controlled by `showCopyright` prop,
default true).

`VdNavbar` v1 had a `theme-switcher` named slot. V2 adds a generic
`actions` slot alongside it. The `theme-switcher` slot is preserved
for backwards compatibility; the existing `<App>.vue` usage continues
to work.

## Class-by-class migration table

| Vd* component | Framework classes used | SFC structure |
|---|---|---|
| `VdSidenav` | `.vd-sidenav-overlay`, `.vd-sidenav`, `.vd-sidenav-{placement}`, `.is-open`, `.vd-sidenav-header`, `.vd-sidenav-title`, `.vd-sidenav-close`, `.vd-sidenav-body`, `.vd-sidenav-footer` | Teleport to body; overlay + aside (the dialog) as siblings |
| `VdOffcanvas` | `.vd-sidenav-overlay` (reused for backdrop), `.vd-offcanvas`, `.vd-offcanvas-{placement}`, `.is-open`, `.vd-sidenav-header`/`.vd-sidenav-body` | Same structure as VdSidenav, different outer class |
| `VdSticky` | `.vd-sticky`, `.is-stuck` | Single wrapper div; IntersectionObserver-driven |
| `VdWaypoint` | `.vd-waypoint-nav`, `.vd-waypoint-border`, `.is-active` | Single wrapper div + slotted nav + sections; IntersectionObserver sets `is-active` on matching link |
| `VdFooter` (V2) | `.vd-footer`, `.vd-footer-container`, `.vd-footer-section`, `.vd-footer-heading`, `.vd-footer-list`, `.vd-footer-list-item`, `.vd-footer-link` | Multi-column grid (Zone 1: `.vd-footer-columns`) + copyright flex row (Zone 1: `.vd-footer-copyright`) |
| `VdNavbar` (V2) | existing classes (`.vd-navbar`, `.vd-navbar-container`, `.vd-navbar-nav`, `.vd-nav-link`, `.vd-navbar-brand`, `.vd-navbar-actions`) | No CSS change; just an additional `actions` named slot |

## Cascade ordering convention

No new framework CSS is introduced. The cascade remains:

1. `framework/dist/vanduo.min.css` (loaded in `src/main.ts:5`)
2. `vd2/src/styles/app.css` (loaded in `src/main.ts:6`)

The three new Zone 1 rules (`.vd-footer-columns`,
`.vd-footer-copyright`, `.vd-footer-copyright .vd-footer-list`) live
in `app.css` and win cascade ties over any future framework
overrides. They are vd2-specific helpers — the framework's
`.vd-footer-section` remains the only selector the VdFooter SFC
emits that is framework-defined.

## Open question (carry into implementation if it surfaces)

- The framework's `vd-sidenav-overlay` z-index is
  `var(--vd-sidenav-overlay-z-index)`. If the framework ever ships
  a z-index conflict with `.vd-offcanvas` (which reuses the overlay
  class), vd2 may need to layer its own. Currently no conflict.
