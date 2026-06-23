# Proposal: vd-data-display

## Why

The framework ships four data-display CSS modules that vd2 had not
yet wrapped in Vue: avatar (size, variant, shape, status indicator
states), table (striped, bordered, hover variants), collection
(hoverable, bordered, item list), and breadcrumb (size, separator
variants). The previous P0-1 bucket (`vd-layout-navigation`) closed
the layout/navigation gap; this P0-2 bucket closes the data-display
gap.

## What Changes

### New components

- `src/components/VdAvatar.vue` — props: `src?`, `alt?`, `initials?`,
  `size` (xs/sm/md/lg/xl/2xl), `variant` (primary/secondary/
  success/warning/error/info), `shape` (circle/rounded/square),
  `status?` (online/offline/away/busy). Renders `.vd-avatar` with the
  matching modifier classes; shows `.vd-avatar-initials` when no
  image src; renders `.vd-avatar-status` indicator when status is
  set.

### Reused components

- `src/layout/VdBreadcrumb.vue` (existing) — `items: { label, href? }[]`
  prop; renders `.vd-breadcrumb`, `.vd-breadcrumb-list`,
  `.vd-breadcrumb-item`, `.vd-breadcrumb-link`, `.vd-breadcrumb-sep`.
  Page for it is new in this bucket.

### New components (continued)

- `src/components/VdTable.vue` — props: `columns: Column[]`,
  `rows: Record<string, any>[]`, `striped?`, `bordered?`, `hover?`,
  `caption?`. Renders responsive `.vd-table` with optional
  `.vd-table-striped`/`.vd-table-bordered`/`.vd-table-hover` classes.
- `src/components/VdCollection.vue` — props: `items: Item[]`,
  `header?`, `hoverable?`, `bordered?`, `size` (sm/md/lg). Renders
  `.vd-collection` with header, list of items, and optional
  avatar/title/subtitle/action per item.

### New pages

- `src/pages/components/Avatar.vue` — sizes, variants, shapes, status
  indicators, usage.
- `src/pages/components/Table.vue` — basic, striped, bordered,
  hoverable, usage.
- `src/pages/components/Collection.vue` — basic, hoverable, usage.
- `src/pages/components/Breadcrumb.vue` — demo, sizes (sm/lg), usage.

### nav.ts and router.ts

- New `Data display` category added under the `components` tab in
  `src/nav.ts` with 4 sections: Avatar, Table, Collection, Breadcrumb.
- `src/router.ts` extended with 4 new page imports and route entries.

## Capabilities

### New Capabilities

- `data-display`: the 3 new Vd* components plus the 4 component
  pages. (VdBreadcrumb was already in the codebase; its page is
  new in this bucket.)

### Modified Capabilities

_None._

## Impact

- vd2's component library grows from 19 to 22 (3 new — VdAvatar,
  VdTable, VdCollection).
- 4 new pages added; visual-parity spec grows from 26 to 30 routes.
- Unit tests: 63 total (51 prior + 12 new in this bucket).
- No framework bundle changes — the three new components use
  existing framework CSS selectors.
- No remote pushes in this session.

## Out of scope

- Framework repo source edits (none required).
- P0-3 (feedback), P0-4 (interactive-forms), P1-*, P2-1 buckets —
  follow-up changes per the `full-capability-transfer` plan.
- Migrating vd2 to `window.Vanduo` runtime.
- Remote pushes.
