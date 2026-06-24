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

- [x] 3.1 `components/Modal.vue` ← `modals.html`
- [x] 3.2 `components/Toast.vue` ← `toast.html` (fixed: toasts rendered
      invisible — `.vd-toast` needs runtime `.is-visible`; rebuilt
      store/container/item to mirror `framework/js/components/toast.js`:
      per-position containers, default icons, title, progress, pause-on-hover)
- [x] 3.3 `components/Tooltip.vue` ← `tooltips.html`
- [x] 3.4 `components/Chip.vue` ← `feedback/chips.html`
- [x] 3.5 `components/Skeleton.vue` ← `components/skeleton.html` (nav.ts mis-maps to primitives/overview.html)
- [x] 3.6 `components/Preloader.vue` ← `feedback/preloader.html`

## 4. Data display (batch)

- [x] 4.1 `components/Avatar.vue` ← `data-display/avatars.html`
- [x] 4.2 `components/Table.vue` ← `data-display/tables.html`
- [x] 4.3 `components/Collection.vue` ← `data-display/collections.html`
- [x] 4.4 `components/Breadcrumb.vue` ← `components/navigation.html` (breadcrumb section; nav.ts mis-maps to breadcrumbs.html)

## 5. Interactive (batch)

- [x] 5.1 `components/Tabs.vue` ← `tabs.html`
- [x] 5.2 `components/Accordion.vue` ← `accordion.html`
- [x] 5.3 `components/Flow.vue` ← `components/carousel.html` (nav.ts mis-maps
      to flow.html; was a stale `VdFlow`/`VdStack` scaffold). Ported
      `framework/js/components/flow.js` into `useFlow(root)`: slide + fade
      transitions, prev/next, keyboard arrows, pointer/touch swipe, autoplay
      (pause on hover/focus), `flow:change`. Intentional fix vs docs: the legacy
      markup nests bare `<button>`s in `.vd-flow-indicators` but the framework
      CSS/JS target `.vd-flow-indicator` — `useFlow` adds that class so
      indicators render as dots and become interactive (`.is-active` +
      `aria-current`), the component's clear design intent.

## 6. Forms (batch)

- [x] 6.1 `components/Forms.vue` ← `forms.html` (was `VdStack`/`VdInput`
      scaffold). Input fields, controls (checkbox/radio/switch/range),
      validation states, input groups, sizes, password toggle, class-reference
      table. New `VdCustomSelect.vue` renders the framework's enhanced
      `.custom-select-*` widget declaratively (toggle, select, outside-click,
      keyboard nav, typeahead, aria) per `framework/js/components/select.js`.
      Range value + password toggle wired in Vue (static/no-op in legacy docs).
- [x] 6.2 `components/FormValidation.vue` ← `form-validation.html` (was
      `VdStack` scaffold). 4 live demo forms (required+email, length+range,
      password-match, modes+custom-msg), rules table, API tables, custom-rule
      snippet, accessibility. New `useValidate(root)` ports
      `framework/js/components/validate.js` (rules, blur/input/submit modes,
      `data-vd-msg-*`, `.is-valid`/`.is-invalid` + `.vd-validate-error`).
      Two fixes-to-documented-intent: `match:ID` resolves by element id
      (legacy queried `[name]` → demo always failed) and per-field
      `data-vd-validate-mode` is honored (legacy only read form-level mode).
- [ ] 6.3 `components/Datepicker.vue` ← `datepicker.html`
- [ ] 6.4 `components/Timepicker.vue` ← `timepicker.html`
- [x] 6.5 `components/Rating.vue` ← `rating.html` (was `VdStack` scaffold).
      5 demos (basic, preset, readonly, max-10, sm/md/lg sizes), API tables,
      accessibility. Rewrote `VdRating.vue` to the framework contract — empty
      `.vd-rating-star` buttons (CSS draws ★ via `::before`), `is-active`/
      `is-half`/`is-hovered`, value-only display, sm/lg — per `rating.js`
      (old scaffold used wrong `is-filled` + literal `★`). Kept `modelValue`
      API so `rating.spec.ts` stays green.
- [ ] 6.6 `components/Stepper.vue` ← `stepper.html`
- [ ] 6.7 `components/Autocomplete.vue` ← `autocomplete.html`
- [ ] 6.8 `components/Transfer.vue` ← `transfer.html`
- [ ] 6.9 `components/Tree.vue` ← `tree-view.html`
- [ ] 6.10 `components/Pagination.vue` ← NO DOCS SOURCE. nav.ts maps the
      `/components/pagination` route to `button-groups.html` (a bug — that file
      has zero pagination content); there is no `pagination.html` in
      `docs/sections/`, though `framework/js/components/pagination.js` + CSS
      exist. Not a 1-to-1 port: needs a product decision (author a net-new
      Pagination docs page from the framework component, or mirror the legacy
      nav bug). DEFERRED pending that decision; scaffold left untouched.
- [x] 6.11 `components/ButtonGroups.vue` ← `button-groups.html` (was
      `VdStack`/`VdButtonGroup` scaffold). Horizontal/outline+active/full-width,
      vertical, sm/lg groups, View Code, API table — purely presentational.

## 7. Primitives (batch)

- [x] 7.1 `components/Progress.vue` ← `progress.html` (was `VdStack`/`VdProgress`
      scaffold). Semantic variants, sizes, striped/animated, indeterminate,
      multiple/labeled bars, CSS-var + API tables, accessibility. CSS-only.
- [x] 7.2 `components/Spinner.vue` ← `spinner.html` (was `VdStack`/`VdSpinner`
      scaffold). Border spinner (sizes/colors/in-buttons), dots, growing pulse,
      centering helper, signature quad loader + skeleton overlay, tables. CSS-only.
- [x] 7.3 `components/CodeSnippet.vue` ← NO DOCS SOURCE (nav.ts → non-existent
      `components/code-snippet.html`). Per the "author a real page" decision,
      authored from the real component (code-snippet.css/.js that powers every
      View Code block): collapsible + multi-tab + expanded demos, class/attr/JS
      reference tables.
- [x] 7.4 `components/Icon.vue` ← NO DOCS SOURCE (nav.ts → non-existent
      `components/icon.html`); duplicates `/core/icons`. Thin wrapper that
      reuses `core/Icons.vue` rather than maintaining a divergent copy.

## 8. Layout (batch)

- [x] 8.1 `components/Sidenav.vue` ← `sidenav.html` (was `VdStack`/`VdSidenav`
      scaffold). Drawer demo + structure/variants/CSS-var/API tables. New shared
      `useSidenav(root)` ports the core of `framework/js/components/sidenav.js`
      (toggle via `data-sidenav-toggle`, body overlay, close button, overlay-click
      + ESC, scroll-lock, `data-vd-position`, sidenav:open/close). Skips the
      legacy portal-to-body/push/resize — demo drawers are position:fixed.
- [ ] 8.2 `components/Sticky.vue` ← `affix.html`
- [ ] 8.3 `components/Scrollspy.vue` ← `scrollspy.html`
- [x] 8.4 `components/Offcanvas.vue` ← `offcanvas.html` (was `VdStack`/`VdOffcanvas`
      scaffold). 4 edge panels (left/right/top/bottom) via the shared
      `useSidenav` composable (`.vd-offcanvas` + `data-vd-position`), code
      snippets, full API tables (classes/attrs/methods/events), accessibility.
- [x] 8.5 `components/Navbar.vue` ← `navbar.html` (was `VdStack`/`VdNavbar`
      scaffold). Rendered navbar demo, basic-structure snippet, variants +
      CSS-var + API tables. Purely presentational.
- [x] 8.6 `components/Footer.vue` ← `footer.html` (was `VdStack`/`VdFooter`
      scaffold). 3-column footer demo, core-markup snippet, variants + CSS-var +
      API tables. Purely presentational.

## 9. Effects (batch)

- [ ] 9.1 `effects/Glass.vue` ← `effects/glass.html`
- [ ] 9.2 `effects/Morph.vue` ← `effects/morph.html`
- [ ] 9.3 `effects/Parallax.vue` ← `effects/parallax.html`

## 10. Theme (batch)

- [ ] 10.1 `components/ThemeSwitcher.vue` ← `theme-switcher.html`
- [ ] 10.2 `components/ThemeCustomizer.vue` ← `theme-customizer.html`

## 11. Core / Foundation (batch)

- [x] 11.1 `core/ColorPalette.vue` ← `core/color-palette.html` (was a stale
      scaffold with wrong violet hexes; rebuilt 1-to-1: 7 Open Color scales,
      semantic surfaces light/dark, gray neutrals, utility-class guide, hues,
      CSS-usage + theming snippets, attribution — 70 swatches matching docs)
- [x] 11.2 `core/Typography.vue` ← `core/typography.html` (was `VdStack`
      scaffold). Type scale, φ leading + tracking, headings, weights, font
      families (initially-expanded snippet via new `DocCodeSnippet` `defaultOpen`
      prop), API table. Uses framework layout primitives (vd-stack/inline/box).
- [x] 11.3 `core/Icons.vue` ← `core/icons.html` (was `VdStack`/`VdIcon`
      scaffold). 6 Phosphor weights, quick-start/import/styling snippets, sample
      icon row with `useTooltips`, icons-in-buttons, attribution, accessibility.
- [x] 11.4 `core/GoldenRatio.vue` ← `core/golden-ratio.html` (was `VdStack`
      scaffold). Golden split, fib 3-col, CSS-grid golden, fib spacing bars,
      type scale, interactive fib-spacing slider (wired in Vue — a docs demo
      with no framework JS), and the φ-vs-conventional table.
- [x] 11.5 `core/GridSystem.vue` ← `core/grid-system.html` (was `VdStack`
      scaffold). Standard-vs-fibonacci intro, 2xl breakpoint grid, responsive
      containers, order utilities, fib flex + CSS-grid layouts, fib gap
      utilities, offsets, and the grid-mode toggle. Fix-to-intent: the legacy
      `data-grid-toggle`/`data-layout-mode` had no backing CSS (no-op); wired in
      Vue + scoped CSS applies the documented proportions (golden 2-col, 2:3:5
      3-col, 1:2:3:5 4-col).
- [x] 11.6 `core/ShadowsGlow.vue` ← `core/shadows-glow.html` (was `VdStack`
      scaffold). Fib elevation ladder, shadow utilities, glow utilities, glow
      intensity variants, colored shadows, CSS-variable customization. Purely
      presentational.

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
