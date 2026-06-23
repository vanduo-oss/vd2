# Tasks

## 1. New Vd* components

- [x] 1.1 Add `src/components/VdAvatar.vue` (src, alt, initials,
      size, variant, shape, status).
- [x] 1.2 Add `src/components/VdTable.vue` (columns, rows, striped,
      bordered, hover, caption).
- [x] 1.3 Add `src/components/VdCollection.vue` (items, header,
      hoverable, bordered, size).

## 2. Reused components (no SFC change)

- [x] 2.1 Reuse `src/layout/VdBreadcrumb.vue` as-is. Page is new.

## 3. New pages

- [x] 3.1 `src/pages/components/Avatar.vue` — sizes, variants,
      shapes, status, usage.
- [x] 3.2 `src/pages/components/Table.vue` — basic, striped,
      bordered, hoverable, usage.
- [x] 3.3 `src/pages/components/Collection.vue` — basic, hoverable,
      usage.
- [x] 3.4 `src/pages/components/Breadcrumb.vue` — demo, sizes, usage.

## 4. nav.ts and router.ts

- [x] 4.1 Add `Data display` category to `src/nav.ts` with 4
      sections (Avatar, Table, Collection, Breadcrumb).
- [x] 4.2 Add 4 page imports and 4 route entries in `src/router.ts`.
- [x] 4.3 Fix pre-existing nav.ts: the prior change left `id:
      'feedback'` duplicated for the first category. Restored
      `id: 'core'` for the Button/Badge/Alert/Card category.

## 5. Tests

- [x] 5.1 Add `tests/unit/components/avatar.spec.ts` (4 tests).
- [x] 5.2 Add `tests/unit/components/table.spec.ts` (4 tests).
- [x] 5.3 Add `tests/unit/components/collection.spec.ts` (4 tests).
- [x] 5.4 Extend `tests/e2e/visual-parity.spec.ts` with 4 new
      routes. Refresh baselines.

## 6. OpenSpec change folder

- [x] 6.1 `README.md` — summary.
- [x] 6.2 `proposal.md` — Why / What Changes / Capabilities.
- [x] 6.3 `design.md` — class-by-class migration table, naming
      decisions, cascade convention.
- [x] 6.4 `tasks.md` — this file.
- [x] 6.5 `specs/data-display/spec.md` — R1–R4 acceptance.

## 7. Validation

- [x] 7.1 `pnpm run build` clean.
- [x] 7.2 `pnpm run lint` clean.
- [x] 7.3 `pnpm run typecheck` clean.
- [x] 7.4 `pnpm run test` (unit) — 63/63 passing.
- [x] 7.5 `pnpm run test:e2e` (Chromium Desktop) — 35/35 passing
      (30 visual-parity + 5 interaction).

## Out of Scope (framework repo)

> No framework work required. All three new components use existing
> framework CSS selectors.
