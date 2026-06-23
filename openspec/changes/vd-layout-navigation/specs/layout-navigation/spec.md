# layout-navigation

## Purpose

vd2's layout/navigation surface — 4 new Vd* components
(`VdSidenav`, `VdSticky`, `VdWaypoint`, `VdOffcanvas`) plus V2
upgrades to `VdNavbar` and `VdFooter` — covers the full set of
framework CSS layout primitives that ship in
`framework/dist/vanduo.min.css`. The components are Vue-native
reimplementations; no framework source edits are required.

## Requirements

### R1 — All four new components exist and accept the documented prop API

`src/components/VdSidenav.vue`, `VdSticky.vue`, `VdWaypoint.vue`,
and `VdOffcanvas.vue` MUST exist and accept the props documented in
`proposal.md` §"What Changes" → "New components".

Verification: `git -C vd2 grep -l "name: 'VdSidenav'\|name: 'VdSticky'\|name: 'VdWaypoint'\|name: 'VdOffcanvas'" src/components/` returns all 4 files.

### R2 — V2 VdFooter accepts sections prop and renders the multi-column grid

`src/layout/VdFooter.vue` MUST accept a `sections: FooterSection[]`
prop and render the multi-column grid using framework's
`.vd-footer-section`, `.vd-footer-heading`, `.vd-footer-list`,
`.vd-footer-list-item` selectors. The copyright row MUST be a
separate flex container with a top border separator.

Verification: `tests/unit/components/footer.spec.ts` covers the
sections prop and copyright toggle.

### R3 — V2 VdNavbar exposes both theme-switcher and actions slots

`src/layout/VdNavbar.vue` MUST expose both `theme-switcher` and
`actions` named slots in the navbar-actions div. The `theme-switcher`
slot is preserved from v1; the `actions` slot is new in V2.

Verification: `git -C vd2 grep "slot name=" src/layout/VdNavbar.vue`
returns both `theme-switcher` and `actions`.

### R4 — All 6 new pages render at their routes and have visual-parity baselines

Each of the 6 new pages (Sidenav, Sticky, Scrollspy, Offcanvas,
Navbar, Footer) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/components/<name>` (returns 200 from
  `pnpm run preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop project) passes
31/31 (26 visual-parity baselines + 5 interaction tests).

### R5 — Interactive components handle Escape, backdrop, and close button

`VdSidenav` and `VdOffcanvas` MUST close on:
- The `.vd-sidenav-close` button click.
- Escape keydown.
- Click on the `.vd-sidenav-overlay` (when `closeOnBackdrop` is true).

Verification: `tests/e2e/layout-navigation.spec.ts` covers open/
Escape and backdrop close for both components. `tests/unit/components/sidenav.spec.ts` and `offcanvas.spec.ts` cover the close-button path.

### R6 — IntersectionObserver components degrade gracefully when IO is unavailable

`VdSticky` and `VdWaypoint` MUST short-circuit cleanly when
`IntersectionObserver` is unavailable (SSR, very old browsers, or
the test environment after the `IntersectionObserverStub` from
`tests/unit/setup.ts` is in effect).

Verification: `tests/unit/components/sticky.spec.ts` and
`waypoint.spec.ts` pass with the jsdom stub.

### R7 — No regression in existing 20 routes

The original 20 visual-parity baselines (added by the prior
`promote-layout-to-framework` change) MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 31/31,
including all 20 pre-existing routes.
