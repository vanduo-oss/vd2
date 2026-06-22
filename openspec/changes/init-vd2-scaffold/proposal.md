## Why

`vd2/` is an empty git repo that needs to host a new Vue 3 + Vite + `vite-ssg`
documentation site that visually mirrors the existing `@vanduo-oss/docs` static
site while consuming `@vanduo-oss/framework` for CSS-only tokens and component
classes. Before any feature work can land we need a buildable, lintable,
type-checked baseline: a `package.json` with the documented scripts, a
`tsconfig.json` strict enough to catch the contract mistakes this codebase
prefers to prevent, a `vite.config.ts` wired up to `vite-ssg`, an `.npmrc`
mirroring the framework's published security policy, and a minimal `src/main.ts`
+ `src/App.vue` that boots in dev, pre-renders to `dist/`, and serves a single
route successfully.

## What Changes

- Add `package.json` declaring `@vanduo-oss/vd2`, `type: "module"`,
  `packageManager: pnpm@10.28.2`, `engines.node >= 20`, and scripts: `dev`,
  `build`, `preview`, `lint`, `typecheck`, `test`, `test:e2e`, `format`.
- Add `pnpm-workspace.yaml` (empty, single-package) and `.npmrc` mirroring
  `framework/.npmrc` verbatim, including `save-exact=true`,
  `ignore-scripts=true`, `minimum-release-age=1440`,
  `trust-policy=no-downgrade`, `block-exotic-subdeps=true`,
  `strict-peer-dependencies=true`, and `registry=https://registry.npmjs.org/`.
- Add `tsconfig.json` (strict, `moduleResolution: bundler`, path alias
  `@ -> src`) and `tsconfig.node.json` for Vite config files.
- Add `vite.config.ts` using `vite-ssg` as the build entry, with
  `@vitejs/plugin-vue` and a CSS pre-bundle rule that resolves
  `@vanduo-oss/framework/css` to its minified bundle.
- Add `eslint.config.js` (flat config, single object) following
  `framework/eslint.config.js`'s shape, scoped to `.ts`/`.vue`, including a
  `no-restricted-syntax` rule that warns on raw `innerHTML =` assignment.
- Add `stylelint.config.js` scoped to the one app-level stylesheet
  (`src/styles/app.css`).
- Add `vitest.config.ts` (jsdom env, alias `@ -> src`).
- Add `playwright.config.ts` matching `framework/playwright.config.ts` (dev
  server `pnpm run preview` against the `dist/` output, base URL
  `http://localhost:8787`).
- Add `src/main.ts` exporting the Vite app factory consumed by `vite-ssg`
  and creating the router/pinia; `src/App.vue` rendering `<RouterView />`
  inside `<main>`; one placeholder home page that confirms the build
  pipeline.
- Add `README.md` with how-to-run instructions and a short stack overview.

## Capabilities

### New Capabilities

- `project-scaffold`: package, tooling, and config baseline for vd2.
- `build-pipeline`: dev/build/preview/typecheck scripts wired through
  vite-ssg and vue-tsc.

### Modified Capabilities

_None — no specs exist before this change._

## Impact

- New npm package `@vanduo-oss/vd2` (local-only until first publish).
- Single-package pnpm repo, no workspace links to other Vanduo packages.
- Consumes `@vanduo-oss/framework` as a runtime CSS dependency (no JS
  imports from `framework/js/vanduo.js`).
- Tooling: ESLint, Stylelint, Vitest, Playwright are new CI dependencies.