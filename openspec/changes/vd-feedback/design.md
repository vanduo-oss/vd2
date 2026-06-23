# Design: vd-feedback

## Class-by-class migration table

| Vd* component | Framework classes used | SFC structure |
|---|---|---|
| `VdChip` | `.vd-chip`, `.vd-chip-{variant}`, `.vd-chip-{size}`, `.vd-chip-outline`, `.vd-chip-dismissible`, `.vd-chip-clickable`, `.vd-chip-avatar`, `.vd-chip-close` | Span with optional avatar img, slot text, optional close button |
| `VdSkeleton` | `.vd-skeleton`, `.vd-skeleton-text`, `.vd-skeleton-text-{size}`, `.vd-skeleton-circle`, `.vd-skeleton-circle-{size}`, `.vd-skeleton-card`, `.vd-skeleton-card-{size}`, `.vd-skeleton-card-header`, `.vd-skeleton-card-body`, `.vd-skeleton-button`, `.vd-skeleton-button-{size}`, `.vd-skeleton-text-short` | Switch on `shape`; for `lines` repeats text skeletons |
| `VdPreloader` | `.vd-preloader-container`, `.vd-preloader-{theme}`, `.vd-preloader`, `.vd-preloader-{variant}`, `.vd-preloader-{size}`, `.vd-preloader-spinner`, `.vd-preloader-text` | Container div + spinner div + optional text span |

## Naming decisions

### Skeleton shape prop is a string union

`VdSkeleton.shape` accepts `'text' | 'circle' | 'rect' | 'card' | 'button'`. The
`rect` shape falls through to the text default (the framework's
`.vd-skeleton` block is the base, with shape modifiers layered on).
The `lines` prop only takes effect with `shape: 'text'`.

### Preloader uses `<div>` not `<span>`

The framework's `.vd-preloader-container` is block-level (the
spinner needs a centered container). `VdPreloader` renders a `<div>`
so it behaves correctly in flex/grid contexts.

## Cascade ordering convention

No new CSS rules — all three components are pure class consumers.
Cascade remains: framework first, `app.css` (Zone 1 + Zone 2) last.
No Zone 1 or Zone 2 additions in this bucket.

## Open question (resolved during implementation)

- The framework's `.vd-preloader-text` styling assumes a flex
  parent (`.vd-preloader-container` is flex). Verified: yes, the
  framework CSS sets `display: flex; flex-direction: column;` on
  `.vd-preloader-container`. The SFC emits the container class
  correctly.
