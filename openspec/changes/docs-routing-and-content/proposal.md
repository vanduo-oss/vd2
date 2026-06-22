## Why

The component demos and section pages from `@docs/sections/` are the
content surface that makes vd2 useful. Currently those are 87 raw HTML
files keyed by `sections.json`. For vd2, those become Vue SFCs reached
through clean URLs (`/components/button`) instead of hash routes
(`#/docs/components/buttons`). The plan calls for a hand-written, typed
`src/nav.ts` to be the single source of truth so that the router,
sidebar, search index, and breadcrumb all derive from one structure
instead of drifting.

## What Changes

- Add `src/nav.ts` — typed `NavTree` mirroring the shape of
  `@docs/sections/sections.json`: top-level `pages` (home, about,
  changelog, docs-landing, kilo-oss, quick-start), and
  `tabs.components.categories[*].sections[*]` (id, title, route, icon,
  keywords).
- Add `src/router.ts` — `createRouter(createWebHistory(), routes)`
  where `routes` is derived from `nav.ts`. Each route receives
  `meta.title`, `meta.keywords`, `meta.category`.
- Add `src/pages/home.vue`, `about.vue`, `changelog.vue`, `kilo-oss.vue`,
  `docs-landing.vue`, `quick-start.vue` — one SFC per top-level page,
  ported from the matching HTML file in `@docs/`.
- Add `src/pages/components/Button.vue`, `Card.vue`, `Modal.vue`,
  `Badge.vue`, `Alert.vue`, `Toast.vue`, `Tooltip.vue`, `Tabs.vue`,
  `Accordion.vue`, `Progress.vue`, `Spinner.vue`, `CodeSnippet.vue`,
  `Flow.vue` — one SFC per v1 component, ported from the matching
  `sections/components/*.html`.
- Add `src/pages/guides/*.vue` for any guides included in v1 (none at
  v1 launch unless a quick-start guide exists in `@docs/`).
- Update `vite.config.ts` `vite-ssg` `includedRoutes` if any route is
  orphaned from the navbar/sidebar/footer walk.
- Add `tests/unit/nav.spec.ts` asserting `nav.ts` shape and that every
  route has a `meta.title`.

## Capabilities

### New Capabilities

- `route-tree`: typed navigation tree derived from `src/nav.ts`.
- `page-content`: Vue SFC pages for v1 sections, ported from
  `@docs/sections/`.

### Modified Capabilities

- `app-shell`: sidebar and breadcrumb now consume `nav.ts` instead of
  hand-written lists.

## Impact

- `src/nav.ts` is the single source of truth for routes, sidebar, search
  index, and breadcrumb.
- `vite-ssg` discovers routes by walking `<RouterLink>` from
  `App.vue`/navbar/footer/sidebar; verify with the `includedRoutes`
  fallback.
- Porting the remaining ~65 sections (date picker, time picker, rating,
  transfer, sidenav, breadcrumb-as-component, timeline, etc.) is
  explicitly deferred to follow-up changes.