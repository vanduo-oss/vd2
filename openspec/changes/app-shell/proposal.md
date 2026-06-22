## Why

The first thing users see on the docs site is the shell: a glass navbar, a
sidebar with category filter, a footer, the theme switcher and customizer,
and the global search modal. Without these surfaces working in Vue, none of
the component demos can be reached and the visual parity goal is unprovable.
We also need a Vue-native theming layer that mutates `<html data-*>`
attributes from a typed composable instead of calling the framework's
`window.Vanduo` runtime, because the plan deliberately decouples vd2 from
the framework's JS.

## What Changes

- Add `src/composables/useTheme.ts` — typed composable reading/writing
  `vanduo-theme-preference` from `localStorage`, applying theme, primary,
  neutral, radius, font data attributes on `<html>`. Gated for SSR:
  reads only on the client, applies on `onMounted`.
- Add `src/stores/theme.ts` — Pinia setup store wrapping `useTheme`.
- Add `src/stores/search.ts` — Pinia setup store for global-search query
  state, index initialization, and result selection.
- Add `src/composables/useGlobalSearch.ts` — builds the search index from
  `src/nav.ts` (added in `docs-routing-and-content`); provides
  `query`, `results`, `select(id)`.
- Add `src/composables/useScrollspy.ts`, `useFocusTrap.ts`,
  `useKeyboardNav.ts` — keyboard / a11y primitives reused by the shell and
  components.
- Add `src/components/VdIcon.vue` — `<i class="ph ph-{name}">` (or
  `ph-fill`) using Phosphor class names; no icon-library dep.
- Add `src/layout/VdNavbar.vue`, `VdNavbarBrand.vue`, `VdFooter.vue`,
  `DocsLayout.vue`, `VdSidebar.vue`, `VdSidebarFilter.vue`,
  `VdBreadcrumb.vue`, `DocSectionNav.vue` — all composing `.vd-*` classes.
- Add `src/overlays/VdThemeSwitcher.vue` (menu variant only — cycle +
  select variants deferred), `VdThemeCustomizer.vue`,
  `GlobalSearchModal.vue`, `VdSpotlight.vue` (deferred if scope tight).
- Add `src/styles/tokens.css` (re-exporting framework tokens) and
  `src/styles/app.css` (docs-shell layout only — the **only** file allowed
  to define selectors outside the framework bundle).
- Update `src/App.vue` to mount the shell + global overlays.

## Capabilities

### New Capabilities

- `app-shell`: layout, navigation, and chrome for the docs site.
- `theming`: data-attribute-based theme mutations, customizer, switcher,
  and persistence.
- `global-search`: header-triggered modal, fuzzy search across
  route metadata.

### Modified Capabilities

_None._

## Impact

- Touches the entire `src/` tree minus `pages/` and `components/` (those
  land in other changes).
- New Pinia stores: `theme`, `search`. Spotlight store is added only if
  `VdSpotlight` lands.
- The framework's `window.Vanduo` runtime is still **not** imported — vd2
  consumes only `dist/vanduo.min.css` from `@vanduo-oss/framework`.
- Hydration: `useTheme` must guard `localStorage` access for SSR. Failing
  to do so will surface as a hydration warning in the dev console and is
  covered by `useTheme.spec.ts`.