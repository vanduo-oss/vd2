## ADDED Requirements

### Requirement: shell-layout-renders
The app MUST render a top navbar (`VdNavbar`), a footer (`VdFooter`), and the active route view.

#### Scenario: home route renders shell
- **WHEN** the user visits `/`
- **THEN** the page contains `<VdNavbar>`, a `<main>` with the home content, and `<VdFooter>`

#### Scenario: docs route renders DocsLayout
- **WHEN** the user visits `/components/button`
- **THEN** the page contains the sidebar (with the Components category) and the section content

### Requirement: sidebar-filter-categories
`VdSidebar` MUST list every section under its category and expose a text filter (`VdSidebarFilter`) that hides non-matching sections in real time.

#### Scenario: filter narrows visible sections
- **WHEN** the user types "but" into the sidebar filter
- **THEN** only sections whose title or keywords contain "but" remain visible

### Requirement: breadcrumb-reflects-route
`VdBreadcrumb` MUST render the category → section trail derived from the active route's `meta.category` and `meta.title`.

#### Scenario: breadcrumb shows category and section
- **WHEN** the user is on `/components/button`
- **THEN** the breadcrumb shows "Components / Button"

### Requirement: nav-ts-is-source-of-truth
The router, sidebar, search index, and breadcrumb MUST derive from the typed `nav.ts` export.

#### Scenario: nav.ts defines route tree
- **WHEN** a contributor adds a new section to `nav.ts`
- **THEN** the route, sidebar entry, search index entry, and breadcrumb for that section appear without further code changes

### Requirement: scoped-styles-forbidden-in-shell
Shell components (`VdNavbar`, `VdFooter`, `DocsLayout`, `VdSidebar`, `VdBreadcrumb`, `DocSectionNav`) MUST NOT contain `<style>` blocks.

#### Scenario: lint blocks scoped style blocks
- **WHEN** a contributor adds a `<style>` block to a shell component
- **THEN** the build fails or the lint rule fires a warning