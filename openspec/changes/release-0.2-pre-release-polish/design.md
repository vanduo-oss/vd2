# Design notes

## CI shape

The CI workflow runs on Node 20 to match `engines.node` in
`package.json` and to stay aligned with the framework repo's
`>=18` floor. It deliberately omits the Playwright e2e job because
browser installation adds ~30 seconds and ~250 MB of dependencies
to every PR; the 77 e2e specs are kept as a local-only release
gate.

When the visual-parity suite or CI runtime budget allows it, a
follow-up change should add a separate `e2e.yml` workflow triggered
by `workflow_dispatch` and push-to-`main` runs. That separation
mirrors the framework repo's two-tier CI strategy.

## OpenSpec cross-repo coordination

The same release milestone (`vd2 v0.2.0`) produces three OpenSpec
change folders in three repos:

- `vd2/openspec/changes/release-0.2-pre-release-polish/`
- `framework/openspec/changes/2026-06-23-vd2-0.2.0-ecosystem-update/`
- `docs/openspec/changes/vd2-0.2.0-ecosystem-update/`

Each repo's folder uses its own local naming convention:

- **framework** uses date-prefixed folders (`YYYY-MM-DD-<topic>`).
- **vd2** and **docs** use bare kebab-case folders (`<topic>`).

The cross-repo references are intentionally light — README links and a
`release-version.json` field in `docs/`. No cross-repo code
dependencies and no shared CI. Each repo keeps its own release
cadence and its own change-folder conventions.

## Why no Node bump

`engines.node` stays at `>=20`. The local development host runs a
newer LTS line (currently v22) which satisfies `>=20`. CI pins Node
20 to match `engines.node` and keep reproducibility with the
framework repo's `>=18` floor. Bumping the minimum higher than the
declared engine would have split CI, local dev, and the documented
consumer target.

## Why no `publish` step

`package.json` declares `"private": true`. Even with the bundle,
size reporter, and `pnpm pack --dry-run` validation, the package is
not pushed to npm. The release path from this state to a public
package is documented in `CONTRIBUTING.md` and requires a deliberate
manual decision by the maintainer.
