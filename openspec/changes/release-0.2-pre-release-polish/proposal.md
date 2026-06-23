## Why

After completing the eight capability-transfer OpenSpec change folders
(`vd-layout-navigation`, `vd-data-display`, `vd-feedback`,
`vd-interactive-forms`, `vd-core-foundation`, `vd-effects`,
`vd-theme-customizer`, `vd-guides`) plus the three foundation folders
(`app-shell`, `core-components`, `docs-routing-and-content`), the
`vd2/` repo is functionally complete: 67 routes, ~70 Vd* components, a
77-test Playwright visual-parity suite, and 105 passing Vitest unit
specs. But the repo is not yet "release-ready" — it lacks a CHANGELOG,
CONTRIBUTING guide, CI workflow, LICENSE file, bundle-size visibility,
or its own OpenSpec change folder documenting this milestone.

This proposal packages that gap as a single pre-release polish
milestone targeting `v0.2.0`, keeping the package `private: true` and
out of npm publish, but giving the maintainer everything needed to
publish later without further polish.

## What Changes

### vd2 repo

- Bump `package.json` version from `0.1.0` to `0.2.0`.
- Update `package.json` `engines.node` remains `>=20` (no change).
  CI pins Node 20.
- Add `package.json` scripts: `stylelint`, `format:check`, `test:size`.
- Create `CHANGELOG.md` (Keep-a-Changelog format) with a `0.2.0`
  entry covering the capability-transfer work, a `0.1.0` baseline
  entry, and the `Removed` / `Fixed` notes from this milestone.
- Create `CONTRIBUTING.md` with the OpenSpec convention, branch /
  no-push policy, validation commands, coding standards, and release
  process for future public publishing.
- Update `README.md`: refresh the stale `## Layout` source tree,
  link to `CONTRIBUTING.md` and `CHANGELOG.md`, add a `## License`
  section.
- Create `.github/workflows/ci.yml`: PR/push-to-main workflow that
  runs install → typecheck → lint → stylelint → format:check → unit →
  build → test:size on Node 24. **No e2e in CI** (kept local-only
  to avoid browser-install minutes on PRs).
- Create `tests/scripts/size.mjs` and wire it to `pnpm run test:size`
  — reports gzipped sizes of `dist/assets/app-*.{js,css}`.
- Create `LICENSE` (MIT, matching `framework/LICENSE`).
- Create this OpenSpec change folder
  (`openspec/changes/release-0.2-pre-release-polish/`).
- Verify `pnpm pack --dry-run` succeeds and lists the expected
  files in the package tarball.
- Commit locally on a `vd2-0.2.0-release-prep` branch. **No push.**

### framework repo (local dev branch only)

- Create `openspec/changes/2026-06-23-vd2-0.2.0-ecosystem-update/`
  documenting the ecosystem reference update.
- Add a vd2 reference link to `framework/README.md`.
- Commit locally on a `vd2-0.2.0-release-prep` branch. **No push.**

### docs repo (local dev branch only)

- Create `openspec/changes/vd2-0.2.0-ecosystem-update/` documenting the
  ecosystem reference update.
- Add a vd2 reference link to `docs/README.md`.
- Add `"vd2":"0.2.0"` to `docs/release-version.json`.
- Commit locally on a `vd2-0.2.0-release-prep` branch. **No push.**

## Impact

- **Zero behavior change.** No Vd* component or page is touched.
- **Zero test count change.** All 105 unit specs and 77 e2e specs
  remain unchanged and passing.
- **Zero visual diff.** No CSS, no markup.
- **Repository surface**: ~10 new files (CHANGELOG, CONTRIBUTING,
  LICENSE, CI workflow, size reporter, OpenSpec folders in three
  repos) and small edits to package.json, README.md (three repos),
  eslint.config.js, and docs/release-version.json.
- **Node floor unchanged**: `engines.node` stays at `>=20`. The local
  development host is on a newer LTS line and still satisfies this
  floor. CI pins Node 20.

## Out of Scope (this change)

- Remote pushes from any of the three repos.
- npm publish (package remains `private: true`).
- GitHub release notes or a GitHub Release.
- Opening upstream PRs.
- The `promote-layout-to-framework` implementation (tracked under
  the existing `promote-layout-to-framework` change folder; this is
  the next plan, not this one).
- CODEOWNERS, dependabot, or SECURITY.md for vd2.
- Multi-Node CI matrix (single Node 24 for now).
- Visual-parity CI (intentionally kept local-only for this milestone).
- Verbatim content port of the existing docs getting-started guide
  (tracked in `vd-guides` as future work).
- vd-charts / vd-flowchart / vd-hex / music-player P2 demos (tracked
  in the original `full-capability-transfer` plan as out of scope).
