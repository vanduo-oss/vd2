# Tasks

## 1. New pages (17)

- [x] 1.1 `src/pages/guides/GettingStarted.vue`
- [x] 1.2 `src/pages/guides/FirstLayout.vue`
- [x] 1.3 `src/pages/guides/FrameworkIntegration.vue`
- [x] 1.4 `src/pages/guides/EsmVsIife.vue`
- [x] 1.5 `src/pages/guides/RuntimeArchitecture.vue`
- [x] 1.6 `src/pages/guides/LifecycleManager.vue`
- [x] 1.7 `src/pages/guides/LazyLoading.vue`
- [x] 1.8 `src/pages/guides/CssVariables.vue`
- [x] 1.9 `src/pages/guides/ThemeCustomizerGuide.vue`
- [x] 1.10 `src/pages/guides/Fibonacci.vue`
- [x] 1.11 `src/pages/guides/Accessibility.vue`
- [x] 1.12 `src/pages/guides/SecurityPractices.vue`
- [x] 1.13 `src/pages/guides/ProductionBestPractices.vue`
- [x] 1.14 `src/pages/guides/MigrationComparison.vue`
- [x] 1.15 `src/pages/guides/Troubleshooting.vue`
- [x] 1.16 `src/pages/guides/UtilitiesCheatSheet.vue`
- [x] 1.17 `src/pages/guides/VanduoEcosystem.vue`

## 2. nav.ts and router.ts

- [x] 2.1 Add `Guides` category to `src/nav.ts` (17 sections).
- [x] 2.2 Add 17 page imports and 17 route entries in
      `src/router.ts`.

## 3. Tests

- [x] 3.1 Extend `tests/e2e/visual-parity.spec.ts` with 17 new
      routes. Refresh baselines.

## 4. OpenSpec change folder

- [x] 4.1 `README.md` — summary.
- [x] 4.2 `proposal.md` — Why / What Changes / Capabilities /
      content scope note.
- [x] 4.3 `design.md` — page-by-page render path, cross-cutting
      decisions, open question.
- [x] 4.4 `tasks.md` — this file.
- [x] 4.5 `specs/guides/spec.md` — R1 acceptance.

## 5. Validation

- [x] 5.1 `pnpm run build` clean.
- [x] 5.2 `pnpm run lint` clean.
- [x] 5.3 `pnpm run typecheck` clean.
- [x] 5.4 `pnpm run test` (unit) — 105/105 passing (no new unit
      tests in this bucket).
- [x] 5.5 `pnpm run test:e2e` (Chromium Desktop) — 77/77
      passing (72 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All pages use existing framework
> classes (`vd-h1`, `vd-h2`, `vd-lead`, `vd-stack`, `vd-table`,
> `vd-card`, `VdCodeSnippet`, `VdCard`).
