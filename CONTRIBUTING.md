# Contributing

Thanks for your interest in `vd2`.

## Current Status

`vd2` is pre-release (`v0.2.0`) and currently `private: true`. The repo
is not accepting external contributions yet, but the framework team
uses this document to keep the workflow explicit and reproducible.

## Development Setup

### Prerequisites

- **Node.js ≥ 20** (matches `engines.node` in `package.json`).
- **Corepack enabled** (ships with Node.js, activates pnpm):
  ```sh
  corepack enable
  ```

### First-time Setup

```sh
corepack enable
pnpm install
pnpm run build           # Verifies the static build works
pnpm test                # Vitest unit suite (105 specs)
pnpm run test:e2e        # Playwright Chromium Desktop smoke (77 specs)
```

### Useful Release Checks

```sh
pnpm run lint
pnpm run stylelint
pnpm run format:check
pnpm run typecheck
pnpm test
pnpm run build
pnpm run test:size       # Reports gzipped dist/assets/app-* sizes
pnpm pack --dry-run      # Verifies the package tarball contents
```

### Security Rules

The `.npmrc` mirrors the framework repo's hardened install policy.
Honor it:

1. **Always use `pnpm`** — never `npm install` or `yarn`.
2. **Pin exact versions** — `save-exact=true` is enforced by `.npmrc`.
3. **Never run `--ignore-scripts` globally** — use `pnpm.allowedBuilds`
   in `package.json` instead.
4. **Review `pnpm audit` output** before merging changes that touch
   dependencies.
5. **Adding new dependencies requires a justification** in the OpenSpec
   proposal's `### Out of Scope` or change rationale.

## OpenSpec Change Folders

Every meaningful change ships as an OpenSpec folder under
`openspec/changes/`. A change folder contains:

- `proposal.md` — the _why_ and the _what_.
- `design.md` — design notes and trade-offs (optional).
- `tasks.md` — a numbered checklist of work.
- `specs/<change-name>/spec.md` — normative acceptance criteria.

Branch name convention: `<topic-kebab-case>` for the change folder;
match your git branch to the change folder name when work is in
flight.

Examples already in the tree:

- `app-shell/`, `core-components/`, `docs-routing-and-content/`
  (foundation changes shipped in `0.1.0`).
- `vd-layout-navigation/`, `vd-data-display/`, `vd-feedback/`,
  `vd-interactive-forms/`, `vd-core-foundation/`, `vd-effects/`,
  `vd-theme-customizer/`, `vd-guides/` (capability-transfer changes
  shipped in `0.2.0`).
- `promote-layout-to-framework/` (next plan, not yet implemented).
- `release-0.2-pre-release-polish/` (this pre-release polish).

## Branch and Push Policy

- All work happens on local dev branches — never commit directly to
  `main`.
- **No remote pushes** are performed by automation. The repository
  maintainer reviews the local branch and decides when to push.
- Branch name for `vd2 v0.2.0` release-prep work:
  `vd2-0.2.0-release-prep`.

> **Local host note:** the maintainer's local Node.js is on a newer
> LTS line (currently v22) which satisfies `>=20`. The CI workflow
> pins Node 20 to match `engines.node` and to keep reproducibility
> with the framework repo's `>=18` floor.

- When starting a new change, create a new branch from `main` named
  after the OpenSpec folder: e.g.
  `vd-data-display`, `fix/theme-customizer-collision`.

## Updating Visual Baselines

The Playwright visual-parity suite at
`tests/e2e/visual-parity.spec.ts` uses checked-in baselines under
`tests/e2e/visual-parity.spec.ts-snapshots/`. To refresh them after an
intentional visual change:

```sh
pnpm exec playwright test --update-snapshots
```

Inspect the diff carefully before committing — visual changes can hide
regressions.

## Coding Standards

- **TypeScript** strict. `pnpm run typecheck` must pass.
- **ESLint** flat config. `pnpm run lint` must pass.
- **Stylelint** for `src/**/*.css`. `pnpm run stylelint` must pass.
- **Prettier** formatting. `pnpm run format:check` must pass; run
  `pnpm run format` to fix locally.
- **No JS coupling** to `@vanduo-oss/framework` runtime — vd2 consumes
  only the CSS bundle (`@vanduo-oss/framework/css`) and class names.
- **Component naming** — all Vd\* components are PascalCase SFCs under
  `src/components/`. Filenames are kebab-case.

## Release Process (Future)

`vd2` is currently `private: true` and not published. When the
maintainer is ready to publish:

1. Remove `"private": true` from `package.json`.
2. Update `engines.node` if the consumer target changes.
3. Verify `pnpm pack --dry-run` lists the expected files
   (`dist/`, `CHANGELOG.md`, `CONTRIBUTING.md`, `LICENSE`, `README.md`,
   `package.json`).
4. Tag the release commit (`vX.Y.Z`) on the dev branch.
5. Run `pnpm publish --dry-run` first; review the registry payload.
6. Coordinate the publish with any sibling framework/docs releases.
7. Coordinate the push to remote and open the upstream PR.

Until then, treat the dev branch as the source of truth and the
OpenSpec change folder as the spec record.

## Communication

Internal coordination happens in OpenSpec change folders and in
`openspec/specs/`. For questions about the framework itself, see the
upstream [`@vanduo-oss/framework`](https://github.com/vanduo-oss/framework)
repo.

---

Thanks for your patience while the architecture and roadmap settle.
