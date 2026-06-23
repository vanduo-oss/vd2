# Design: vd-core-foundation

## Page-by-page layout

| Page | Render path | Key tokens |
|---|---|---|
| Color palette | Card grid (`auto-fit, minmax(120px, 1fr)`), each card has a colored swatch + token + hex | `--vd-color-primary`, `--vd-color-success`, `--vd-color-warning`, `--vd-color-error`, `--vd-primary-0..9` |
| Typography | Stacked list with sample text + token reference per size/weight | `--vd-font-size-xs..3xl`, `--vd-font-weight-normal..bold` |
| Icons | Card grid (`auto-fill, minmax(120px, 1fr)`), each card has a `<VdIcon>` + name label | `<VdIcon name="...">` |
| Golden ratio | 4 ratio cards (text) + 3 visual example cards (colored gradient blocks at exact dimensions) | `--vd-color-primary`, `--vd-primary-7` |
| Grid system | Breakpoint table (12-col `vd-table vd-table-bordered`) + 12-column row demo using `vd-row` + `vd-col-1` | `vd-row`, `vd-col-1..12` |
| Shadows & glow | Grid of cards with `box-shadow` applied inline + token name label | `--vd-shadow-xs..xl` |

## Cross-cutting decisions

- **Inline style vs framework class:** Where the framework
  provides a class (e.g. `vd-table-bordered`, `vd-row`, `vd-col-N`,
  `vd-card`), the SFC uses the class. Where the value is one-off
  (e.g. a specific hex color for a swatch background, a specific
  pixel dimension for a card example), the SFC uses inline
  `style` attributes. Inline style is acceptable for static
  demonstration content where a framework class would be overkill.
- **No new Zone 1 CSS:** No `app.css` changes in this bucket.
  Everything is either framework-supplied CSS or inline style.
- **Icon names are hard-coded in the Icons page:** a follow-up
  bucket could replace this with a generated list (e.g. from the
  framework's icon metadata), but for v1 the curated list is
  sufficient.

## Cascade ordering convention

No new CSS rules. The pages emit framework classes (or inline
styles) only. Cascade remains: framework first, `app.css` last.
