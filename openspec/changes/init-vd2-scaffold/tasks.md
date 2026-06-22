# Tasks

## 1. Project metadata

- [ ] 1.1 Create `package.json` with `name: "@vanduo-oss/vd2"`, `type:
      "module"`, `private: true`, `packageManager: "pnpm@10.28.2"`,
      `engines.node: ">=20"`, scripts (`dev`, `build`, `preview`,
      `lint`, `typecheck`, `test`, `test:e2e`, `format`).
- [ ] 1.2 Create empty `pnpm-workspace.yaml`.
- [ ] 1.3 Create `.npmrc` mirroring `framework/.npmrc` verbatim
      (`registry`, `save-exact`, `ignore-scripts`, `minimum-release-age`,
      `trust-policy`, `block-exotic-subdeps`,
      `strict-peer-dependencies`).

## 2. TypeScript + Vue tooling

- [ ] 2.1 Create `tsconfig.json` (strict, `moduleResolution: bundler`,
      `paths: { "@/*": ["src/*"] }`, `jsx: "preserve"`,
      `types: ["vite/client", "node"]`).
- [ ] 2.2 Create `tsconfig.node.json` extending the root for `vite.config.ts`
      and `playwright.config.ts`.
- [ ] 2.3 Create `vite.config.ts` importing `vite-ssg` as the build
      entry, with `@vitejs/plugin-vue`, and a CSS pre-bundle resolving
      `@vanduo-oss/framework/css`.
- [ ] 2.4 Create `env.d.ts` declaring Vue SFC module shims.

## 3. Lint + test configs

- [ ] 3.1 Create `eslint.config.js` (flat) importing
      `eslint-plugin-vue`, `@vue/eslint-config-typescript`, and the
      `no-restricted-syntax` rule against `innerHTML =`.
- [ ] 3.2 Create `stylelint.config.js` scoped to `src/styles/app.css`.
- [ ] 3.3 Create `vitest.config.ts` (`environment: "jsdom"`, alias
      `@ -> src`).
- [ ] 3.4 Create `playwright.config.ts` mirroring
      `framework/playwright.config.ts` (web server `pnpm run preview` on
      port 8787).

## 4. App entry

- [ ] 4.1 Create `src/main.ts` exporting a Vite app factory consumed by
      `vite-ssg`. Initializes Pinia, creates the router, mounts to
      `#app`.
- [ ] 4.2 Create `src/App.vue` rendering `<RouterView />` inside `<main>`.
- [ ] 4.3 Create `src/router.ts` with one placeholder route (`/`) mapped
      to a temporary `src/pages/_placeholder.vue`. (The full `nav.ts`
      lands in `docs-routing-and-content`.)
- [ ] 4.4 Create `src/styles/app.css` with the docs-shell reset/grid
      (only file allowed to define selectors outside the framework
      bundle).
- [ ] 4.5 Import `@vanduo-oss/framework/css` once in `main.ts` so the
      `.vd-*` classes are present in the bundle.

## 5. Docs

- [ ] 5.1 Create `README.md` with how-to-run, stack overview, and a note
      about the `save-exact` / `minimum-release-age` policy.

## 6. Verification

- [ ] 6.1 `pnpm install` succeeds.
- [ ] 6.2 `pnpm run lint` passes with zero errors.
- [ ] 6.3 `pnpm run typecheck` (`vue-tsc --noEmit`) passes.
- [ ] 6.4 `pnpm run build` emits `dist/index.html` containing the
      placeholder content.
- [ ] 6.5 `pnpm test` boots Vitest (zero specs is acceptable for this
      change).
- [ ] 6.6 `pnpm run preview` serves `dist/` on port 8787.