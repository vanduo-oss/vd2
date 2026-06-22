# vd2 — Vue 3 docs for `@vanduo-oss/framework`

`vd2` is a Vue 3 + Vite + `vite-ssg` recreation of the Vanduo docs
site. It consumes `@vanduo-oss/framework` for CSS tokens and component
classes only — no JavaScript coupling to the framework runtime.

## Stack

- Vue 3 (Composition API, `<script setup lang="ts">`)
- vue-router 4 (`createWebHistory`, clean URLs)
- Pinia 2 (setup-style stores)
- Vite 5 + `vite-ssg` 0.24 (pre-rendered static output)
- TypeScript 5 (strict) + `vue-tsc`
- Vitest 2 + `@vue/test-utils` for composables/logic
- Playwright 1.60 for e2e

## Requirements

- Node ≥ 20
- pnpm 10.28.2 (auto-provisioned via `corepack enable`)

## Install

```bash
corepack enable
pnpm install
```

> Note: `.npmrc` mirrors the framework repo's hardened install policy
> (`save-exact=true`, `ignore-scripts=true`, `minimum-release-age=1440`,
> `trust-policy=no-downgrade`, `block-exotic-subdeps=true`,
> `strict-peer-dependencies=true`). The `@vanduo-oss/*` scope is
> excluded from the 24-hour release-age gate so internal publishes are
> consumed immediately.

## Scripts

```bash
pnpm run dev          # Vite dev server at http://localhost:5173
pnpm run build        # vite-ssg -> dist/
pnpm run preview      # static preview at http://localhost:8787
pnpm run typecheck    # vue-tsc --noEmit
pnpm run lint         # ESLint (flat config)
pnpm test             # Vitest (unit)
pnpm run test:e2e     # Playwright Chromium Desktop smoke
pnpm run format       # Prettier
```

## Layout

```
src/
  main.ts             # vite-ssg app factory
  App.vue             # <RouterView /> shell
  router.ts           # route table (placeholder for now)
  pages/              # one SFC per route
  styles/app.css      # shell layout only — no component styling
```

Component primitives, the theme system, the global search modal, and the
full navigation tree land in follow-up OpenSpec change proposals
(`app-shell`, `core-components`, `docs-routing-and-content`).