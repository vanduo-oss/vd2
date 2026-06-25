# Vanduo — Public Release Readiness

_Status snapshot: 2026-06-25. Covers the four repos under `0_vanduo/`: **core**, **framework**, **vd2**, **docs**._

Vanduo is intentionally a **dual-engine** design system. Two of the four repos are publishable **libraries** (`core`, `framework`); two are deployable **sites/apps** (`vd2`, `docs`). With the in-page Vanilla⇄Vue 3 content toggle shipped, the plan is **one** documentation site at `vanduo.dev`, served as Vue 3 from `vd2`.

## Scorecard

| Repo | Real role | Ver | Kind | LICENSE file | Unit | E2E | CI | Tree |
|---|---|---|---|---|---|---|---|---|
| **core** | token SSOT | 0.1.0 | npm library | ✓ | 11 | 0 | ✓ ci + parity | `core-0.1.0-release-prep` _(Wave 1 ✅)_ |
| **framework** | zero-build engine | 1.5.1 | npm library | ✓ | 44 | PW matrix (chromium/ff/webkit + a11y + mobile) | ci + tests | release-prep, clean |
| **vd2** | NEW vanduo.dev site | 0.2.0 | app (`private`) | ✓ | 37 | 2 | ci only | release-prep, clean |
| **docs** | OLD vanilla site | 1.5.1 | app (`private`) | ✗ | 2 | 14 | ci + Pages | release-prep, clean |

### Already strong (do not redo)
- Every `.npmrc` is supply-chain hardened: `ignore-scripts`, `minimum-release-age`, `trust-policy`, `block-exotic-subdeps`, `save-exact`, `strict-peer-dependencies`.
- No secrets / tokens / `.env` committed in any repo.
- framework CI already runs `pnpm audit --audit-level=moderate`.

## Blockers

- **🚩 vanduo.dev is served by `docs`, not `vd2`.** The `CNAME` (vanduo.dev) and Pages deploy (`static.yml`) live in **docs**. vd2 has **no deploy workflow and no CNAME**. The "vd2 becomes vanduo.dev" plan has no pipeline yet — biggest single gap.
- ~~**core is the foundation but the least ready:** no LICENSE file, zero tests, zero CI, thin README~~ — **resolved in Wave 1** (LICENSE, 11 zero-dep `node:test` checks, CI + parity job, expanded README) on branch `core-0.1.0-release-prep` (committed locally, not pushed).
- **`file:` deps:** `vd2 → @vanduo-oss/core: file:../core`, `docs → flowchart: file:vendor/*.tgz`. Fine for private apps; vd2's deploy build must still resolve core (workspace or published).
- **No publish automation** anywhere (no changesets / release-please / `npm publish` workflow). Publishing is manual today.
- **docs ecosystem deps** (`charts@0.0.1`, flowchart tgz, hex-grid, music-player) live outside these 4 repos and look pre-release.

## Strategy — waves

**Wave 0 — decisions (yours; gate everything)**
1. docs vs vd2 fate + move `CNAME`/Pages deploy to vd2.
2. Publish policy: public npm now, or stay pre-1.0 until the deferred "framework consumes core's CSS" consolidation lands (publishing core 0.1.0 then reshuffling token ownership = churn).
3. Merge the three `vd2-0.2.0-release-prep` branches → `main` + tag cadence.

**Wave 1 — core hardening** ✅ _(done — `core-0.1.0-release-prep`, local)_ — LICENSE, README, `verify-parity` wired into CI, `pnpm audit` gate, zero-dep `node:test` suite.

**Wave 2 — framework** _(most mature; needs a human security pass)_ — confirm published/dist freshness, then runtime XSS review.

**Wave 3 — vd2** _(flagship; auto-test heavy)_ — deploy pipeline + CNAME, expand Playwright, cut over to vanduo.dev.

**Wave 4 — docs** — retire or repurpose per Wave 0.

## Security audit / hardening focus
- **Highest value: framework's runtime** — published JS that runs inside third-party pages. Audit DOM sinks (`innerHTML`/`insertAdjacentHTML`, `eval`/`new Function`, URL/attribute handling, `data-*` parsing). **vd2 composables mirror this logic** → audit both together.
- vd2 changelog `v-html` on `changelog-content.html` — trusted first-party (confirmed static); keep it that way.
- Cheap wins: pin GitHub Actions to commit SHAs, add Dependabot, `npm publish --provenance` for the two libraries, extend the `pnpm audit` gate (only framework has it) to core/vd2/docs.

## Auto-test vs. manual judgment

| Auto-coverable (vitest / Playwright) | Needs manual judgment |
|---|---|
| **core (vitest/node:test):** build determinism (build twice → byte-identical), token schema / DTCG shape, parity via `verify-parity`, "no unprefixed token" guarantees | docs/vd2 role + CNAME cutover |
| **vd2 (Playwright):** engine toggle swap + persistence across reload, theme/customizer, SSG hydration, axe a11y, parity diff (vd2 page vs docs page) | versioning / publish policy & timing |
| **framework:** keep PW matrix; add vitest for pure runtime-module logic | security review of framework runtime (XSS sinks) |
| **docs:** existing 14 e2e as regression/parity oracle for vd2 (if retained) | bundled-asset licenses (fonts, phosphor-icons, THIRD-PARTY-LICENSES) |

## Suggested order
**Wave 1 (core)** is the fastest *safe* start — fully automatable, unblocks the dependency chain, independent of Wave 0. Everything downstream pivots on the docs/vd2 fork.
