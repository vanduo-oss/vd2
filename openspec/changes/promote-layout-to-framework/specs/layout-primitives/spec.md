# layout-primitives

## Purpose

Any framework consumer (vd2, docs, future sites) can render a working
shell — navbar row, footer row, typography scale, padding scale,
dropdown menu — without vendoring or rewriting app-level CSS. The
framework's `css/vanduo.css` entry is sufficient.

## Requirements

### R1 — Selectors are exported verbatim

The framework package's `css` export (currently
`framework/dist/vanduo.min.css`) must contain all of the following
selectors with the same name and intended semantics. Aliases are not
acceptable.

Layout primitives shipped by the framework today (no work needed, but
must remain present):

- `vd-navbar-container`
- `vd-navbar-nav`
- `vd-nav-link`
- `vd-footer-container`
- `vd-footer-list`
- `vd-dropdown-menu`
- `vd-dropdown-item`
- `vd-dropdown-menu-end`

New layout primitives shipped by Part B of this change:

- `vd-navbar-brand-name`
- `vd-navbar-brand-mark` (optional — see design.md open question)
- `vd-display`
- `vd-lead`
- `vd-pad-xs`
- `vd-pad-sm`
- `vd-pad-md`
- `vd-pad-lg`
- `vd-pad-xl`
- `vd-pad-2xl`
- `vd-pad-3xl`
- `vd-pad-4xl`
- `vd-pad-5xl`

Verification: `grep -E '\.(vd-navbar-container|vd-navbar-nav|vd-nav-link|vd-footer-container|vd-footer-list|vd-dropdown-menu|vd-dropdown-item|vd-dropdown-menu-end|vd-navbar-brand-name|vd-navbar-brand-mark|vd-display|vd-lead|vd-pad-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl))\b' framework/dist/vanduo.min.css | sort -u | wc -l` returns `17` (the
shipped-today count after Part A: 8 selectors; the new-selector count
from Part B: 9 — `vd-navbar-brand-mark` is optional per the design
open question, so the expected count is 16 or 17 depending on
resolution).

### R2 — Cascade ordering

The selectors resolve in the following order in the cascade (later
wins ties):

1. Framework primitives (existing layer 1)
2. Framework layout primitives (new layer 2, this change)
3. Consumer overrides (vd2's `app.css`, loaded after the framework
   bundle in `vd2/src/main.ts:5-6`)

Verification: open a vd2 page in the browser, inspect any element with
both a framework class and a vd2 class — the vd2 class wins for any
property both define.

### R3 — Bundle size budget

`framework/dist/vanduo.min.css` grows by **at most 15 KB gzipped** as
a result of Part B.

Verification: record the gzipped size of the bundle before Part B
lands, compare after.

### R4 — No regression on existing framework consumers

The framework's own Playwright suite must pass against re-baselined
snapshots. Any snapshot that shifts by more than the existing
threshold must be either:

- Re-baselined with an explicit justification in the PR description,
  or
- Fixed in the PR (the cascade should not shift unexpectedly).

Verification: `pnpm run test` in the `framework` repo exits 0 against
the freshly baselined suite.
