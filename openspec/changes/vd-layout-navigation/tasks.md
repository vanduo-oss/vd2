# Tasks

## 1. New Vd* components

- [x] 1.1 Add `src/components/VdSidenav.vue` (modelValue, placement,
      title, closeOnBackdrop, closeOnEsc, update:modelValue, close).
- [x] 1.2 Add `src/components/VdSticky.vue` (topOffset, zIndex,
      stuckClass, disabled). IntersectionObserver-driven.
- [x] 1.3 Add `src/components/VdWaypoint.vue` (navSelector,
      activeClass, disabled). IntersectionObserver-driven.
- [x] 1.4 Add `src/components/VdOffcanvas.vue` (same prop API as
      VdSidenav; default placement 'right').

## 2. V2 upgrades

- [x] 2.1 Update `src/layout/VdNavbar.vue` — add `actions` named slot
      alongside existing `theme-switcher` slot.
- [x] 2.2 Update `src/layout/VdFooter.vue` — accept `sections` prop
      (array of `{ title, links }`); render multi-column grid +
      copyright row.

## 3. CSS additions (Zone 1, vd2-specific)

- [x] 3.1 Add `.vd-footer-columns` (auto-fit grid).
- [x] 3.2 Add `.vd-footer-copyright` (flex row with top border).
- [x] 3.3 Add `.vd-footer-copyright .vd-footer-list` (inline-flex
      for legal links inside copyright row).

## 4. New pages

- [x] 4.1 `src/pages/components/Sidenav.vue` — left/right placement
      demos + trigger + markup.
- [x] 4.2 `src/pages/components/Sticky.vue` — live demo with 800px
      of scrollable content.
- [x] 4.3 `src/pages/components/Scrollspy.vue` — sidebar nav + 4
      sections; live waypoint demo.
- [x] 4.4 `src/pages/components/Offcanvas.vue` — 4 placement demos
      (left, right, top, bottom).
- [x] 4.5 `src/pages/components/Navbar.vue` — live demo (second
      VdNavbar) + variants + markup.
- [x] 4.6 `src/pages/components/Footer.vue` — 3-section demo +
      basic markup + columns markup.

## 5. nav.ts and router.ts

- [x] 5.1 Add `Layout` category to `src/nav.ts` with 6 sections
      (Sidenav, Sticky, Waypoint, Offcanvas, Navbar, Footer).
- [x] 5.2 Add 6 page imports and 6 route entries in
      `src/router.ts`.

## 6. Tests

- [x] 6.1 Add `tests/unit/components/sidenav.spec.ts` (4 tests).
- [x] 6.2 Add `tests/unit/components/offcanvas.spec.ts` (4 tests).
- [x] 6.3 Add `tests/unit/components/sticky.spec.ts` (2 tests).
- [x] 6.4 Add `tests/unit/components/waypoint.spec.ts` (2 tests).
- [x] 6.5 Add `tests/unit/components/footer.spec.ts` (4 tests).
- [x] 6.6 Add `tests/e2e/layout-navigation.spec.ts` (5 tests: sidenav
      open/Escape, sidenav backdrop close, offcanvas open/Escape,
      sticky renders, waypoint renders).
- [x] 6.7 Add `tests/unit/setup.ts` with `IntersectionObserver`
      stub for jsdom.
- [x] 6.8 Add `tests/unit/setup.ts` to `vitest.config.ts`
      `setupFiles`.
- [x] 6.9 Extend `tests/e2e/visual-parity.spec.ts` with 6 new
      routes. Refresh baselines.

## 7. OpenSpec change folder

- [x] 7.1 `README.md` — one-page summary, links, branch coordination.
- [x] 7.2 `proposal.md` — Why / What Changes / Capabilities (New:
      `layout-navigation`) / Impact / Out of scope.
- [x] 7.3 `design.md` — naming decisions (VdWaypoint vs Scrollspy,
      VdSidenav vs VdSidebar), class-by-class migration table,
      cascade ordering, open question.
- [x] 7.4 `tasks.md` — this file.
- [x] 7.5 `specs/layout-navigation/spec.md` — R1–R4 acceptance.

## 8. Validation

- [x] 8.1 `pnpm run build` clean.
- [x] 8.2 `pnpm run lint` clean.
- [x] 8.3 `pnpm run typecheck` clean.
- [x] 8.4 `npx stylelint "src/**/*.css"` clean.
- [x] 8.5 `pnpm run test` (unit) — 51/51 passing.
- [x] 8.6 `pnpm exec playwright test --project='Chromium Desktop'`
      — 31/31 passing (26 visual-parity + 5 interaction).
- [x] 8.7 Manual smoke at 1440×900: navbar height ~64 px, nav links
      inline, footer grid, Phosphor glyphs, theme switcher opens.

## Out of Scope (framework repo)

> No framework work required for this change. The four new
> components are Vue-native reimplements that use existing
> framework CSS selectors. There is no `## Out of Scope` section
> in this task list because there is nothing to do in the
> framework repo for this change.
