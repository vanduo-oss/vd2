# Template

## Purpose

Common layout templates built from Vanduo primitives. Pure markup patterns —
no JavaScript, no special build step. Copy and adapt as starting points.

## Requirements

### Requirement: Page skeleton

The page skeleton template SHALL provide `<header class="vd-navbar">`,
`<main class="vd-container">`, and `<footer class="vd-footer">` blocks.

### Requirement: Hero

The hero template SHALL combine a `<section class="vd-glass">` with a
heading + paragraph + primary CTA button.

### Requirement: Two-column split

The split template SHALL use `.vd-row` + `.vd-col-12 vd-col-md-3` (sidebar)
+ `.vd-col-12 vd-col-md-9` (content).

### Requirement: Card grid

The card grid template SHALL use `.vd-grid` + `.vd-grid-cols-N` +
`.vd-gap-*` to produce an evenly spaced grid of cards.

### Requirement: Stack & inline

The stack template SHALL use `.vd-stack` + `.vd-stack-N` for vertical
rhythm and `.vd-inline` + `.vd-gap-N` for horizontal rows.

### Requirement: Token-driven

All templates SHALL consume existing tokens (e.g. `var(--vd-color-*)`,
`var(--vd-scale-*)`) — no new tokens are introduced by the template set.

### Requirement: Documentation-only

The template page SHALL be a static reference — no JavaScript, no live
demos with composables.

## Out of Scope

- Framework-bundled starter projects (templates are HTML fragments only).
- Build-time codegen of templates from data.