# Proposal: vd-layout-navigation (4 new Vd* components + 2 V2 upgrades)

## Why

vd2's v1 component set (from the prior `core-components` change) covered
the most heavily demoed sections in the existing docs (Button, Badge,
Alert, Card, Modal, Toast, Tooltip, Tabs, Accordion, Flow, Progress,
Spinner, CodeSnippet, Icon) plus 7 layout primitives. The framework
shipped several more layout/navigation CSS components that vd2 did not
yet have Vue wrappers for:

- `vd-sidenav` family (slide-out side drawers, used by the docs's
  mobile menu)
- `vd-offcanvas` family (slide-in panels anchored to any edge)
- `vd-sticky` (stick-to-top-of-viewport while scrolling)
- `vd-waypoint-nav` family (scrollspy — highlights nav links as the
  user scrolls through corresponding sections)

Additionally, `VdNavbar` and `VdFooter` shipped in v1 with hard-coded
content (single copyright + 3 hardcoded links). The docs site shows a
3-column footer with sections and a separate copyright row. V2
upgrades to these two components support the multi-section pattern
and let the layout system extend without re-templating the SFCs.

This change closes the gap for the layout/navigation bucket in the
`full-capability-transfer` plan. Buckets P0-2 (data-display), P0-3
(feedback), and P0-4 (interactive-forms) land in follow-up changes.

## What Changes

### New components

- `src/components/VdSidenav.vue` — `modelValue: boolean`,
  `placement: 'left' | 'right' | 'top' | 'bottom'`, `title: string`,
  `closeOnBackdrop: boolean` (default true), `closeOnEsc: boolean`
  (default true). Emits `update:modelValue` and `close`. Teleports to
  `body`. Renders the framework's `.vd-sidenav-overlay` (sibling) and
  the `.vd-sidenav` panel (the dialog). Default `aria-label` is
  `'Side navigation'`. Closes on backdrop click, Escape key, or
  close-button click.
- `src/components/VdSticky.vue` — `topOffset: number` (default 0),
  `zIndex: number` (default 100), `stuckClass: string` (default
  `'is-stuck'`), `disabled: boolean`. Uses `IntersectionObserver` to
  toggle the stuck class when a sentinel above the element scrolls
  out of view.
- `src/components/VdWaypoint.vue` — `navSelector: string` (optional,
  scope of `is-active` toggling), `activeClass: string` (default
  `'is-active'`), `disabled: boolean`. Uses `IntersectionObserver`
  to highlight nav links (anchors inside the wrapper or
  `navSelector`) when their target section becomes the topmost
  visible one.
- `src/components/VdOffcanvas.vue` — same prop API as `VdSidenav`,
  with default `placement: 'right'`. Uses the framework's
  `.vd-offcanvas` family.

### V2 upgrades

- `src/layout/VdNavbar.vue` — added a generic `actions` named slot
  alongside the existing `theme-switcher` slot. Pages can inject
  additional action buttons (e.g. a "Toggle layout" demo button)
  without re-templating the navbar. The `theme-switcher` slot is
  preserved for backwards compatibility.
- `src/layout/VdFooter.vue` — accepts a `sections: FooterSection[]`
  prop where each section has `title: string` and
  `links: FooterLink[]`. Renders a 3-column (or auto-fit) grid of
  sections using framework's `.vd-footer-section`,
  `.vd-footer-heading`, `.vd-footer-list`, and
  `.vd-footer-list-item` classes. The copyright row is a separate
  flex container with a top border, rendered after the columns.

### New pages (under `src/pages/components/`)

- `Sidenav.vue` — live demos of left/right placement, trigger button,
  markup code snippet.
- `Sticky.vue` — live sticky demo with 800px of scrollable content
  to demonstrate the stuck state.
- `Scrollspy.vue` — live demo with a sidebar nav and 4 sections;
  waypoint updates the active class as the user scrolls.
- `Offcanvas.vue` — live demos of all 4 placements (left, right,
  top, bottom) with VdButton triggers.
- `Navbar.vue` — live demo (renders a second VdNavbar inside a
  card for visual reference), variants section, basic markup.
- `Footer.vue` — multi-column demo with 3 sections, basic markup,
  columns markup.

### nav.ts and router.ts

- New `Layout` category added under the `components` tab in
  `src/nav.ts`, with 6 sections: Sidenav, Sticky, Waypoint
  (Scrollspy), Off-canvas, Navbar, Footer.
- `src/router.ts` extended with 6 new page imports and route
  entries.

### CSS additions (Zone 1, vd2-specific)

- `.vd-footer-columns` — auto-fit grid for the V2 footer's section
  row. References framework tokens (`--vd-footer-section-spacing`).
- `.vd-footer-copyright` — flex row for the copyright + legal-links
  row, with a top border separator.
- `.vd-footer-copyright .vd-footer-list` — inline-flex for the
  legal-links list inside the copyright row.

All three are vd2-specific helpers (Zone 1) — they do not duplicate
framework CSS. The framework ships `.vd-footer-section`,
`.vd-footer-heading`, `.vd-footer-list`, and `.vd-footer-list-item`
but does not provide a multi-section row or copyright-row layout
pattern.

## Capabilities

### New Capabilities

- `layout-navigation`: the 4 new Vd* components plus the 2 V2
  upgrades. Includes the 6 component pages and the 6 nav-tree
  entries.

### Modified Capabilities

_None._

## Impact

- vd2's component library grows from 15 to 19 (4 new), with 2
  upgraded (VdFooter, VdNavbar).
- 6 new pages added; visual-parity spec grows from 20 to 26
  routes.
- Unit tests: 51 total (33 prior + 18 new in this bucket).
- E2E interaction spec (new file `tests/e2e/layout-navigation.spec.ts`)
  covers open/close/Escape/backdrop for the interactive components.
- No framework bundle changes — the four new components are
  Vue-native reimplementations that use existing framework CSS
  selectors (`.vd-sidenav`, `.vd-sidenav-overlay`, `.vd-offcanvas`,
  `.vd-sticky`, `.vd-waypoint-nav`).
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P0-2 (data-display), P0-3 (feedback), P0-4 (interactive-forms)
  buckets — follow-up changes per the `full-capability-transfer`
  plan.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
