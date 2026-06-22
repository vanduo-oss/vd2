# Tasks

## 1. Router

- [ ] 1.1 Replace `src/router.ts` with a `buildRoutes()` function
      that walks `nav.ts` and emits `RouteRecordRaw[]` for every
      page and section.
- [ ] 1.2 Pass the derived routes to `ViteSSG` statically.

## 2. Pages

- [ ] 2.1 Add `src/pages/home.vue` (already shipped in
      init-vd2-scaffold — verify and improve).
- [ ] 2.2 Add `src/pages/about.vue`, `changelog.vue`, `kilo-oss.vue`,
      `docs-landing.vue`, `quick-start.vue`.
- [ ] 2.3 Add `src/pages/components/Button.vue`, `Badge.vue`,
      `Alert.vue`, `Card.vue`, `Modal.vue`, `Toast.vue`, `Tooltip.vue`,
      `Tabs.vue`, `Accordion.vue`, `Flow.vue`, `Progress.vue`,
      `Spinner.vue`, `CodeSnippet.vue`, `Icon.vue` — each using
      `DocsLayout` and demoing the matching `Vd*` component.

## 3. Section routing

- [ ] 3.1 Confirm every section in `nav.ts` is reachable from
      `VdSidebar` (so vite-ssg pre-renders it).
- [ ] 3.2 Update `router.afterEach` to set `document.title` from
      `meta.title`.

## 4. Tests

- [ ] 4.1 Add `tests/unit/nav.spec.ts` assertion: `flattenNav` and
      `buildRoutes` return the same number of sections.
- [ ] 4.2 Add `tests/unit/pages.spec.ts` (lightweight) asserting
      every route resolves to a non-empty component module.

## 5. Verification

- [ ] 5.1 `pnpm run typecheck` passes.
- [ ] 5.2 `pnpm run lint` passes.
- [ ] 5.3 `pnpm test` passes.
- [ ] 5.4 `pnpm run build` emits one HTML file per route under
      `dist/<route>/index.html` (or `dist/index.html` for `/`).
- [ ] 5.5 `pnpm run preview` serves the static site on port 8787.