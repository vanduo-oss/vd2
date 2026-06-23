# Design: vd-effects

## Page-by-page layout

| Page | Render path | Key framework classes |
|---|---|---|
| Glass | Grid of 4 glass variants on a colorful gradient background + in-use demo | `vd-glass`, `vd-glass-contrast`, `vd-glass-light`, `vd-glass-dark` |
| Morph | Grid of 3 morph cards | `vd-morph`, `vd-morph-blur`, `vd-morph-rotate` |
| Parallax | Single parallax block with gradient background + content layer | `vd-parallax`, `vd-parallax-bg`, `vd-parallax-content` |

## Cross-cutting decisions

- **No JS required for any effects page:** all three CSS modules
  are pure CSS; no framework JS or vd2 JS to wire up.
- **Background gradient is set inline** to ensure the glass
  effect is visible (the blur is only visible over a colorful
  background, not a flat white).
- **Effects pages live under `/effects/*`**, not `/components/*`,
  because they're documented CSS modules, not interactive
  components. The `Effects` category in `nav.ts` is placed inside
  the `components` tab for sidebar consistency (mirrors the docs
  site's structure).

## Cascade ordering convention

No new CSS rules. The pages emit framework classes (or inline
styles) only. Cascade remains: framework first, `app.css` last.
