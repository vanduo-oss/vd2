## Context

`vd2/` was created as an empty git repo with one intentional artifact:
`.git/FETCH_HEAD` exists despite no remote, which is benign and will be
left untouched. The parent repo (the `0_vanduo` workspace) contains
`framework/` and `docs/` whose conventions vd2 deliberately mirrors:

- `framework/package.json`: `"type": "module"`, `"name":
  "@vanduo-oss/framework"`, pnpm-managed, with `engines.node` and
  `packageManager` pinned.
- `framework/.npmrc`: a hardened npm install policy that vd2 must
  duplicate verbatim.
- `framework/eslint.config.js`: single flat-config object with file-scoped
  overrides, including a `no-restricted-syntax` rule against raw
  `innerHTML =` assignment. This is the pattern vd2 adopts.
- `framework/playwright.config.ts`: static-server preview at
  `http://localhost:8787` serving the built `dist/`.

OpenSpec is global (no local `openspec/` until `openspec init`), and the
`vd2/` repo is a bare git init — so the very first commit is the
OpenSpec scaffold, followed by the four change proposals in sequence.

## Goals / Non-Goals

**Goals:**

- A `pnpm install` that succeeds against the published
  `@vanduo-oss/framework` and the listed dev tools.
- A `pnpm run dev` that boots Vite and serves a placeholder home route.
- A `pnpm run build` that runs `vite-ssg` and emits `dist/index.html`
  pre-rendered for the placeholder route.
- A `pnpm run typecheck` that runs `vue-tsc --noEmit` with no errors.
- A `pnpm test` that runs Vitest (zero specs required for this change,
  but the runner must work).
- A `pnpm run preview` that serves `dist/` on port 8787 matching the
  Playwright config base URL.

**Non-Goals:**

- Authoring any actual component or page content (those are other
  changes).
- Setting up the GitHub Actions workflow (lands in a follow-up change).
- Wiring the theme composable or any store (those are part of
  `app-shell`).

## Decisions

- **Pin `pnpm` to `10.28.2` via `packageManager`**, matching
  `framework/`. Use `corepack enable` to provision.
- **Pin `@vanduo-oss/framework` to `^1.5.1`** in `dependencies` for v1;
  exact version will be enforced by `save-exact=true` in `.npmrc` on the
  first install.
- **Use flat ESLint config** (`eslint.config.js`) with the same rule
  shape as `framework/eslint.config.js`, scoped to `.ts` and `.vue`.
- **No Tailwind / PostCSS pipeline** in v1: styling is handled entirely
  by the framework CSS bundle, plus one `src/styles/app.css` for shell
  layout.
- **Vite pre-bundle** `@vanduo-oss/framework/css` to avoid the runtime
  resolving to the JS entry.
- **Single-package pnpm repo** — `pnpm-workspace.yaml` is added but
  contains no `packages` entries.
- **Vitest config is jsdom**, matching the framework's existing pattern.

## Risks / Trade-offs

- `vite-ssg` historically lags Vite majors; if the latest `vite-ssg`
  release is incompatible with Vite 5 at the time of install, fall back
  to the version range the `vite-ssg` maintainers pin in their own
  `peerDependencies`.
- `save-exact=true` plus `minimum-release-age=1440` means installs are
  slow on cold caches; document this in `README.md` so contributors
  aren't surprised.
- The framework's full CSS bundle is ~200 KB minified. Trimming to
  `vanduo-core.min.css` is a follow-up; v1 ships the full bundle.