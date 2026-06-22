## ADDED Requirements

### Requirement: vite-ssg-build-pipeline
The build pipeline MUST use `vite-ssg` as the entry, with
`@vitejs/plugin-vue`, and MUST pre-render every route reachable from the
navigation chrome into `dist/` as static HTML.

#### Scenario: build emits pre-rendered html
- **WHEN** `pnpm run build` runs
- **THEN** `dist/index.html` exists and contains the placeholder page
  content

#### Scenario: dev server boots
- **WHEN** `pnpm run dev` runs
- **THEN** Vite serves the placeholder route at `http://localhost:5173/`

#### Scenario: preview serves dist
- **WHEN** `pnpm run preview` runs
- **THEN** a static server serves `dist/` on `http://localhost:8787/`

### Requirement: framework-css-pre-bundled
The Vite config MUST pre-bundle `@vanduo-oss/framework/css` so the
runtime resolves to the CSS entry, not the JS entry.

#### Scenario: vd-classes are present in the bundle
- **WHEN** `pnpm run build` runs
- **THEN** `dist/assets/*.css` contains at least one `.vd-` selector
  from the framework

### Requirement: app-entry-exposes-vite-ssg-factory
`src/main.ts` MUST export a Vite app factory consumable by `vite-ssg`,
initializing Pinia, creating the router, and mounting to `#app`.

#### Scenario: ssr-friendly entry
- **WHEN** `vite-ssg` invokes the factory during pre-render
- **THEN** no `localStorage` or `window`-only APIs are touched on the
  server pass