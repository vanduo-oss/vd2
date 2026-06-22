## Context

The `nav.ts` typed tree seeded in `app-shell` defines 6 top-level pages
(home, docs-landing, quick-start, about, changelog, kilo-oss) plus 13
sections across four categories (Core, Feedback, Interactive,
Primitives). This change wires `nav.ts` into the router, generates the
matching routes, and ships one Vue SFC per route under `src/pages/`.

Pages are styled with the layout primitives (VdStack, VdInline, etc.)
introduced in `core-components` and the `.vd-*` framework classes
shipped with `@vanduo-oss/framework`. Demo pages showcase each v1
component with a header, a short description, and an interactive
example, mirroring the structure of the corresponding
`docs/sections/components/<name>.html` file in the parent repo.

The `DocsLayout` route shell (sidebar + main column + breadcrumb)
wraps every `/components/*` route. The home and top-level pages use
the plain shell (navbar + footer only).

## Goals / Non-Goals

**Goals:**

- `src/router.ts` derives its routes array from `nav.ts` (top-level
  pages plus every section under every category).
- `src/pages/` ships one SFC per route, with at least placeholder
  content that demonstrates the relevant component.
- `DocsLayout` wraps `/components/*` routes; plain layout wraps the
  others.
- `vite-ssg` pre-renders every discovered route into `dist/`.
- `meta.title` and `meta.keywords` are set on every route for the
  global search index.

**Non-Goals:**

- Porting the remaining ~65 sections from `@docs/`. Tracked as
  follow-up changes.
- Authoring visual-diff or pixel-parity tests; the plan accepts
  "good-enough" visual parity for v1.

## Decisions

- **Route derivation**: `src/router.ts` exports a `buildRoutes()`
  function that walks `nav.ts` and produces `RouteRecordRaw[]`. The
  `vite-ssg` factory consumes the routes statically (passed in the
  second arg to `ViteSSG`) so route discovery works during
  pre-rendering.
- **Section page shape**: each `/components/<id>` page uses
  `DocsLayout`, renders an `<h1>` title, an `<h2>` subtitle, an
  example section, and a code block showing framework class usage.
- **Catch-all**: a `/:pathMatch(.*)*` placeholder renders a friendly
  "Coming soon" message for any unimplemented route. This will be
  replaced once the remaining sections are ported.
- **Hydration**: the `meta.title` update happens in
  `router.afterEach` and only mutates `document.title` when
  `typeof document !== 'undefined'`.

## Risks / Trade-offs

- **`vite-ssg` orphan routes**: vite-ssg discovers routes by walking
  `<RouterLink>` from the navbar/footer/sidebar. As long as every
  section appears in `VdSidebar`, every route is pre-rendered. If a
  future contributor adds a route not reachable from the chrome,
  the build silently drops it; we add a `routes` count assertion
  to `tests/unit/nav.spec.ts` to catch silent regressions.
- **Page content depth**: the plan calls for "same heading hierarchy
  and demo structure" but doesn't require byte-for-byte parity with
  the HTML originals. v1 ships a representative demo; richer demos
  land with their respective follow-up changes.