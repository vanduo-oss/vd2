# Navigation

## Purpose

Catalog of Vanduo's navigation primitives — breadcrumbs, pagination,
navbar, sidenav, sticky. Quick-reference index pointing at each component's
dedicated page.

## Requirements

### Requirement: Catalog page

The navigation page SHALL display an index of nav primitives with brief
descriptions and links to each component's dedicated page.

### Requirement: Breadcrumb demo

The page SHALL include a working breadcrumb demo using `.vd-breadcrumbs` +
`.vd-breadcrumb` + `.vd-breadcrumb-item`.

### Requirement: Pagination demos

The page SHALL include both CSS-only pagination (`.vd-pagination` + static
`.vd-pagination-item` markup) and JavaScript-driven pagination (with
`data-pagination` + `data-total-pages` + `data-current-page`).

### Requirement: Navbar demo

The page SHALL include a navbar demo using `.vd-navbar` +
`.vd-navbar-container` + `.vd-navbar-brand` + `.vd-navbar-nav`.

### Requirement: Sidenav demo

The page SHALL include a sidenav demo using `.vd-sidenav` +
`.vd-sidenav-list` + `.vd-sidenav-item`.

### Requirement: Cross-links

The page SHALL link out to each component's dedicated page (Navbar,
Sidenav, Pagination, Breadcrumb, Sticky) for full API references.

### Requirement: Scrollspy highlight

As the user scrolls through the catalog entries, the active entry SHALL
be highlighted using `useScrollspy`.

## Out of Scope

- Combining nav primitives into a full app shell (each component has its
  own dedicated page).
- New nav primitive classes.