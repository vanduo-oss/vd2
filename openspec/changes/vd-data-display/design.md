# Design: vd-data-display

## Class-by-class migration table

| Vd* component | Framework classes used | SFC structure |
|---|---|---|
| `VdAvatar` | `.vd-avatar`, `.vd-avatar-{size}`, `.vd-avatar-{variant}`, `.vd-avatar-{shape}`, `.vd-avatar-initials`, `.vd-avatar-img`, `.vd-avatar-status`, `.vd-avatar-status-{online/offline/away/busy}` | Single wrapper div; conditional img or initials span; conditional status span |
| `VdTable` | `.vd-table-responsive`, `.vd-table`, `.vd-table-{striped/bordered/hover}`, `.vd-table-header`, `.vd-table-caption` | Wraps a native `<table>` for accessibility; renders thead/tbody from `columns`/`rows` props |
| `VdCollection` | `.vd-collection`, `.vd-collection-{size}`, `.vd-collection-{hoverable/bordered}`, `.vd-collection-header`, `.vd-collection-title`, `.vd-collection-list`, `.vd-collection-item`, `.vd-collection-avatar`, `.vd-collection-content`, `.vd-collection-text`, `.vd-collection-text-secondary`, `.vd-collection-action` | Header (optional) + ul of items; each item has avatar/content/action slots |
| `VdBreadcrumb` (reused) | `.vd-breadcrumb`, `.vd-breadcrumb-list`, `.vd-breadcrumb-item`, `.vd-breadcrumb-link`, `.vd-breadcrumb-sep` | Existing SFC; no changes |

## Naming decisions

### VdBreadcrumb SFC was already in `src/layout/`

The prior `docs-routing-and-content` change shipped `VdBreadcrumb.vue`
under `src/layout/` (it's part of the docs shell layout, not a
component library primitive). This bucket reuses it as-is — no SFC
changes. The new `Breadcrumb.vue` page (under `src/pages/components/`)
demonstrates it as a component.

### Avatar vs. Image — image-first with initials fallback

`VdAvatar` accepts `src?` (image URL), `initials?` (text fallback), or
neither (renders a `?` placeholder). When `src` is provided, it
renders an `<img>`; otherwise it renders the initials span. This
mirrors the framework's CSS model: `.vd-avatar-img` and
`.vd-avatar-initials` are the two content variants.

## Cascade ordering convention

No new CSS rules — all four components are pure class consumers.
Cascade remains: framework first, `app.css` (Zone 1 + Zone 2) last.
No Zone 1 or Zone 2 additions in this bucket.

## Open question (resolved during implementation)

- The framework's `.vd-avatar-status` indicator needs a position
  anchor. Verified: `.vd-avatar` has `position: relative` in the
  framework, so `.vd-avatar-status` (absolute) renders correctly
  without vd2-side CSS. No action needed.
