# Tasks

Each section page = a 1-to-1 port of `docs/sections/**/<file>.html` onto
the docs-view template. Check off only after the page is verified against
`:8787` and the batch is `vue-tsc` + `vitest` + `vite-ssg` green.

## 0. Docs-view template (shared)

- [x] 0.1 Rebuild `DocsLayout.vue` → `#docs-view.is-active[data-doc-tab]`
      shell (sidebar + content).
- [x] 0.2 Rewrite `VdSidebar.vue` → `doc-sidebar` (water toggle, filter,
      `doc-nav-list`/`doc-nav-section`/`doc-nav-link`).
- [x] 0.3 Add `DocCodeSnippet.vue` (collapsible, HTML/CSS tabs, copy,
      `data-visible` reveal).

## 1. Top-level pages

- [x] 1.1 `home.vue`
- [x] 1.2 `docs-landing.vue`
- [x] 1.3 `about.vue`
- [ ] 1.4 `quick-start.vue`
- [ ] 1.5 `changelog.vue`
- [ ] 1.6 `kilo-oss.vue`

## 2. Core (batch)

- [x] 2.1 `components/Button.vue` ← `buttons.html`
- [x] 2.2 `components/Badge.vue` ← `badges.html`
- [x] 2.3 `components/Alert.vue` ← `alerts.html`
- [x] 2.4 `components/Card.vue` ← `cards.html`

## 3. Feedback (batch)

- [ ] 3.1 `components/Modal.vue` ← `modals.html`
- [x] 3.2 `components/Toast.vue` ← `toast.html`
- [x] 3.3 `components/Tooltip.vue` ← `tooltips.html`
- [x] 3.4 `components/Chip.vue` ← `feedback/chips.html`
- [x] 3.5 `components/Skeleton.vue` ← `components/skeleton.html` (nav.ts mis-maps to primitives/overview.html)
- [x] 3.6 `components/Preloader.vue` ← `feedback/preloader.html`

## 4. Data display (batch)

- [ ] 4.1 `components/Avatar.vue` ← `data-display/avatars.html`
- [ ] 4.2 `components/Table.vue` ← `data-display/tables.html`
- [ ] 4.3 `components/Collection.vue` ← `data-display/collections.html`
- [ ] 4.4 `components/Breadcrumb.vue` ← `components/breadcrumbs.html`

## 5. Interactive (batch)

- [ ] 5.1 `components/Tabs.vue` ← `tabs.html`
- [ ] 5.2 `components/Accordion.vue` ← `accordion.html`
- [ ] 5.3 `components/Flow.vue` ← `flow.html`

## 6. Forms (batch)

- [ ] 6.1 `components/Forms.vue` ← `forms.html`
- [ ] 6.2 `components/FormValidation.vue` ← `form-validation.html`
- [ ] 6.3 `components/Datepicker.vue` ← `datepicker.html`
- [ ] 6.4 `components/Timepicker.vue` ← `timepicker.html`
- [ ] 6.5 `components/Rating.vue` ← `rating.html`
- [ ] 6.6 `components/Stepper.vue` ← `stepper.html`
- [ ] 6.7 `components/Autocomplete.vue` ← `autocomplete.html`
- [ ] 6.8 `components/Transfer.vue` ← `transfer.html`
- [ ] 6.9 `components/Tree.vue` ← `tree-view.html`
- [ ] 6.10 `components/Pagination.vue` ← `button-groups.html`
- [ ] 6.11 `components/ButtonGroups.vue` ← `button-groups.html`

## 7. Primitives (batch)

- [ ] 7.1 `components/Progress.vue` ← `progress.html`
- [ ] 7.2 `components/Spinner.vue` ← `spinner.html`
- [ ] 7.3 `components/CodeSnippet.vue` ← `code-snippet.html`
- [ ] 7.4 `components/Icon.vue` ← `icon.html`

## 8. Layout (batch)

- [ ] 8.1 `components/Sidenav.vue` ← `sidenav.html`
- [ ] 8.2 `components/Sticky.vue` ← `affix.html`
- [ ] 8.3 `components/Scrollspy.vue` ← `scrollspy.html`
- [ ] 8.4 `components/Offcanvas.vue` ← `offcanvas.html`
- [ ] 8.5 `components/Navbar.vue` ← `navbar.html`
- [ ] 8.6 `components/Footer.vue` ← `footer.html`

## 9. Effects (batch)

- [ ] 9.1 `effects/Glass.vue` ← `effects/glass.html`
- [ ] 9.2 `effects/Morph.vue` ← `effects/morph.html`
- [ ] 9.3 `effects/Parallax.vue` ← `effects/parallax.html`

## 10. Theme (batch)

- [ ] 10.1 `components/ThemeSwitcher.vue` ← `theme-switcher.html`
- [ ] 10.2 `components/ThemeCustomizer.vue` ← `theme-customizer.html`

## 11. Core / Foundation (batch)

- [ ] 11.1 `core/ColorPalette.vue` ← `core/color-palette.html`
- [ ] 11.2 `core/Typography.vue` ← `core/typography.html`
- [ ] 11.3 `core/Icons.vue` ← `core/icons.html`
- [ ] 11.4 `core/GoldenRatio.vue` ← `core/golden-ratio.html`
- [ ] 11.5 `core/GridSystem.vue` ← `core/grid-system.html`
- [ ] 11.6 `core/ShadowsGlow.vue` ← `core/shadows-glow.html`

## 12. Guides (batch — 18 pages)

- [ ] 12.1 All `guides/*.vue` ← `guides/*.html` (getting-started,
      first-layout, framework-integration, esm-vs-iife,
      runtime-architecture, lifecycle-manager, lazy-loading,
      css-variables, theme-customizer, fibonacci, accessibility,
      security, production, migration, troubleshooting,
      utilities-cheat-sheet, vanduo-ecosystem).

## 13. Verification (per batch)

- [ ] 13.1 Playwright visual check vs `:8787` for each new page.
- [ ] 13.2 `npx vue-tsc --noEmit`, `npx vitest run`, `npx vite-ssg build`
      all green.
