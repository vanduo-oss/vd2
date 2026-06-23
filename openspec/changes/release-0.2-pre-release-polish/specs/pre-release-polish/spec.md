# Pre-release polish (vd2 v0.2.0) — Spec

## Requirements

### R1 — Validation pipeline is green

In `vd2/`, the following commands exit 0 on the
`vd2-0.2.0-release-prep` branch after the changes from this change
folder are applied:

- `pnpm run typecheck`
- `pnpm run lint`
- `pnpm run stylelint`
- `pnpm run format:check`
- `pnpm test` (Vitest unit suite, 105 specs passing)
- `pnpm run test:e2e` (Playwright Chromium Desktop, 77 specs passing —
  local-only release gate, not part of CI)
- `pnpm run build`
- `pnpm run test:size` reports gzipped sizes for every file under
  `dist/assets/` matching `app-*.{js,css}`

### R2 — `CHANGELOG.md` follows Keep-a-Changelog

`vd2/CHANGELOG.md` exists and contains:

- A header that links to Keep-a-Changelog and Semantic Versioning.
- A `## [0.2.0] - 2026-06-23` section with `### Added`, `### Changed`,
  `### Removed`, and `### Fixed` subsections.
- A `## [0.1.0] - earlier` section.

### R3 — CI workflow targets Node 20 with no e2e

`vd2/.github/workflows/ci.yml` exists and:

- Triggers on `push` to `main` and on `pull_request` to `main`.
- Sets up Node 20 via `actions/setup-node@v4`.
- Runs `pnpm install --frozen-lockfile`.
- Runs the steps in this order: `typecheck`, `lint`, `stylelint`,
  `format:check`, `test`, `build`, `test:size`.
- Does **not** run `pnpm run test:e2e` (local-only gate).

### R4 — `pnpm pack --dry-run` succeeds with expected files

Running `pnpm pack --dry-run` in `vd2/` exits 0 and the dry-run
output lists (or the tarball would contain):

- `dist/` (the pre-rendered static site)
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `LICENSE`
- `README.md`
- `package.json`

`pnpm` may include additional metadata (e.g. `LICENSE` is sometimes
normalized). The dry-run output should be inspected manually before
publishing.

### R5 — Cross-repo OpenSpec folders exist

- `vd2/openspec/changes/release-0.2-pre-release-polish/` exists with
  `proposal.md`, `design.md`, `tasks.md`, and `specs/pre-release-polish/spec.md`.
- `framework/openspec/changes/2026-06-23-vd2-0.2.0-ecosystem-update/`
  exists on the local `vd2-0.2.0-release-prep` branch with
  `proposal.md`, `tasks.md`, and a specs folder.
- `docs/openspec/changes/vd2-0.2.0-ecosystem-update/` exists on the
  local `vd2-0.2.0-release-prep` branch with `proposal.md`,
  `tasks.md`, and a specs folder.

### R6 — Cross-repo references are present

- `framework/README.md` links to the vd2 repository or package.
- `docs/README.md` links to the vd2 repository or package.
- `docs/release-version.json` contains a `"vd2":"0.2.0"` entry.

### R7 — Branch and push discipline

- All three repos are on a branch named `vd2-0.2.0-release-prep`.
- `main` is untouched in all three repos.
- `git log origin/main..HEAD` (after `git fetch`) is empty in all
  three repos — no pushes were performed.

## Non-goals

- Publishing `vd2` to npm.
- Opening PRs against the upstream `main` branches.
- Implementing the `promote-layout-to-framework` migration.
