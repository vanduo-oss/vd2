# data-display

## Purpose

vd2's data-display surface — `VdAvatar`, `VdTable`, `VdCollection`,
plus the existing `VdBreadcrumb` — covers the framework's CSS data-
display modules. All four are Vue-native reimplementations that
use the framework CSS bundle (`framework/dist/vanduo.min.css`) as-is.

## Requirements

### R1 — New Vd* components exist and accept the documented prop API

`src/components/VdAvatar.vue`, `VdTable.vue`, and `VdCollection.vue`
MUST exist and accept the props documented in `proposal.md` §"What
Changes" → "New components".

Verification: `git -C vd2 grep -l "name: 'VdAvatar'\|name: 'VdTable'\|name: 'VdCollection'" src/components/` returns all 3 files.

### R2 — All 4 new pages render at their routes and have visual-parity baselines

Each of the 4 new pages (Avatar, Table, Collection, Breadcrumb) MUST:
- Build successfully (`pnpm run build`).
- Be reachable via `/components/<name>` (returns 200 from
  `pnpm run preview`).
- Have a visual-parity baseline in
  `tests/e2e/visual-parity.spec.ts-snapshots/`.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 35/35
(30 visual-parity + 5 interaction).

### R3 — VdAvatar handles all size/variant/shape combinations

`VdAvatar` MUST accept the documented prop combinations and apply
the matching framework classes. Renders initials when no `src` is
provided; renders an `<img>` when `src` is provided; renders a
`?` placeholder when neither is provided.

Verification: `tests/unit/components/avatar.spec.ts` covers each
branch.

### R4 — VdTable handles column/row data correctly

`VdTable` MUST render `<thead>` from `columns` and `<tbody>` rows from
`rows`, with the matching cell text per column key. Applies
`vd-table-striped`/`vd-table-bordered`/`vd-table-hover` when the
respective props are true.

Verification: `tests/unit/components/table.spec.ts` covers the
column header rendering, row data, variant classes, and caption.

### R5 — No regression in existing 26 routes

The original 26 visual-parity baselines (from the prior P0-1 bucket)
MUST still pass.

Verification: `pnpm run test:e2e` (Chromium Desktop) passes 35/35,
including all 26 pre-existing routes.
