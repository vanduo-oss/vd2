## ADDED Requirements

### Requirement: routes-derived-from-nav
The router MUST derive every route record from the typed `nav.ts` export; hand-written routes duplicating section metadata are not allowed.

#### Scenario: route count matches nav
- **WHEN** `buildRoutes()` is called
- **THEN** it emits one route per `nav.pages` entry and one route per section across all categories

#### Scenario: every route has meta title
- **WHEN** a route is generated
- **THEN** `meta.title` is set to the page or section title and `meta.keywords` is propagated from the nav entry

### Requirement: clean-urls
The router MUST use `createWebHistory()` so URLs are clean (`/components/button`), not hash-based (`#/components/button`).

#### Scenario: history mode is web
- **WHEN** the router is created
- **THEN** `router.options.history` is the result of `createWebHistory()`

### Requirement: sidebar-discovers-every-section
`VdSidebar` MUST render a link for every section listed in `nav.ts`, ensuring vite-ssg pre-renders every page.

#### Scenario: sidebar lists every category section
- **WHEN** `VdSidebar` renders
- **THEN** every section from `nav.tabs[*].categories[*].sections[*]` is reachable via a `RouterLink`