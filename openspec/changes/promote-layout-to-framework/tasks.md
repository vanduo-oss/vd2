# Tasks

Numbered checklist. Tasks 1–N are vd2 work (Part A — already complete
in this PR). Tasks N+1 onward are framework-repo work, listed under
`## Out of Scope (framework repo)`. Do **not** start the out-of-scope
tasks in this session — they require a separate `framework` repo
session, a `dev-v160-vd2-compatible` branch, and a separate push
decision by the user.

## 1. Part A — vd2 renames

- [x] 1.1 Verify all 8 framework target selectors exist in
      `framework/dist/vanduo.min.css` (vd-navbar-container,
      vd-navbar-nav, vd-nav-link, vd-footer-container, vd-footer-list,
      vd-dropdown-menu, vd-dropdown-item, vd-dropdown-menu-end).
- [x] 1.2 Rename `vd-navbar-inner` → `vd-navbar-container`,
      `vd-navbar-links` → `vd-navbar-nav`, `vd-navbar-link` →
      `vd-nav-link` in `src/layout/VdNavbar.vue`.
- [x] 1.3 Rename `vd-footer-inner` → `vd-footer-container`,
      `vd-footer-links` → `vd-footer-list` in `src/layout/VdFooter.vue`.
- [x] 1.4 Rename `vd-menu` → `vd-dropdown-menu`, `vd-menu-item` →
      `vd-dropdown-item`, `vd-menu-end` → `vd-dropdown-menu-end` in
      `src/overlays/VdThemeSwitcher.vue`.
- [x] 1.5 Grep the entire `src/` tree to confirm no references to the
      old class names remain. (Clean.)
- [x] 1.6 Add the transitional overrides to `src/styles/app.css`
      Zone 2. The prior committed `app.css` had none of these rules,
      so this is a net-new addition, not a deletion. The file is
      split into Zone 1 (long-term vd2-specific) and Zone 2
      (transitional overrides that stay until Part B ships).
- [x] 1.7 Run `pnpm run build`, `pnpm run lint`, `pnpm run typecheck`,
      `npx stylelint "src/**/*.css"` — all clean.
- [x] 1.8 Refresh Playwright visual-parity baselines:
      `pnpm run preview &` then
      `pnpm exec playwright test --project='Chromium Desktop' --update-snapshots`.
- [x] 1.9 Confirm green without `--update-snapshots`:
      `pnpm run test:e2e`. 20/20 passing.

## 2. Part C — OpenSpec change folder (this folder)

- [x] 2.1 `README.md` — one-page summary, links to other docs,
      "proposal-only" note.
- [x] 2.2 `proposal.md` — Why / What Changes / Capabilities (New:
      `layout-primitives`) / Impact / Out of scope.
- [x] 2.3 `design.md` — three-layer CSS model, Part A vs Part B
      migration tables, cascade ordering convention.
- [x] 2.4 `tasks.md` — this file.
- [x] 2.5 `specs/layout-primitives/spec.md` — R1–R4 acceptance criteria.

## Out of Scope (framework repo)

> Do not start these in this session. They require:
> - a separate `framework` repo checkout (currently not in the active
>   session),
> - a local branch `dev-v160-vd2-compatible` forked from latest `main`,
> - the user's explicit "ready" signal before any remote push.

- [ ] Out-1. Create a local branch `dev-v160-vd2-compatible` in the
      `framework` repo from latest `main`. Repeat in the `docs` repo
      for the parallel integration-check branch.
- [ ] Out-2. Add `vd-navbar-brand-name` to
      `framework/css/components/navbar.css`. Optionally add
      `vd-navbar-brand-mark` (or skip and refactor the SFC to use
      `<img>`).
- [ ] Out-3. Add `vd-display` and `vd-lead` to
      `framework/css/core/typography.css`. Import the file from
      `framework/css/vanduo.css` (it is already imported, but verify).
- [ ] Out-4. Create `framework/css/utilities/spacing.css` with
      `vd-pad-xs` through `vd-pad-5xl`. Import it from
      `framework/css/vanduo.css` (after `core/grid.css`, before
      `components/`).
- [ ] Out-5. Run `pnpm run build` in the framework repo. Verify the
      bundle grew by ≤ 15 KB gzipped (R3 in the spec).
- [ ] Out-6. Run `pnpm run test` in the framework repo. Re-baseline
      any snapshots that shifted (R4 in the spec).
- [ ] Out-7. Bump `framework/package.json` version to `1.6.0`. Add a
      `CHANGELOG.md` entry.
- [ ] Out-8. In vd2, after the framework release is available locally:
      `pnpm update @vanduo-oss/framework`. Delete Zone 2 (transitional
      overrides) from `vd2/src/styles/app.css`. Re-baseline the
      Playwright spec.
- [ ] Out-9. In docs, after the framework release: review
      `docs/css/app.css` for layout rules that are now redundant.
      Delete the redundant ones in a follow-up PR. (Deferred — not
      in scope for this change.)
