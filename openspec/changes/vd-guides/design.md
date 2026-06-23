# Design: vd-guides

## Page-by-page render path

All 17 guides follow the same render pattern:

```
<DocsLayout>
  <VdStack gap="xl">
    <header>
      <h1 class="vd-h1">{title}</h1>
      <p class="vd-lead">{subtitle}</p>
    </header>
    <section class="vd-stack vd-stack-md">
      <h2 class="vd-h2">{section title}</h2>
      ...content...
    </section>
    <section class="vd-stack vd-stack-md">
      <h2 class="vd-h2">{section title}</h2>
      ...content...
    </section>
    ...
  </VdStack>
</DocsLayout>
```

Some guides include `<VdCodeSnippet>` for inline code examples
(GettingStarted, FirstLayout, CssVariables, Accessibility, etc.).
Some use `<VdTable>` for tabular content (UtilitiesCheatSheet,
Accessibility, Fibonacci). Otherwise the guides are pure
markdown-style content using framework typography classes
(`vd-h1`, `vd-h2`, `vd-lead`, `vd-stack`, `vd-pad-2xl`).

## Cross-cutting decisions

- **No new components** — guides are content-only.
- **No new CSS** — all classes are framework-supplied.
- **No unit tests** — guides are static content; visual-parity
  baselines catch the only thing that matters (the rendered
  output).
- **No JS interactivity** — guides are read-only documentation.
- **Inline styles** are used sparingly for one-off visual
  demonstrations (e.g. a gradient background in the Getting
  Started code block). Framework classes handle the rest.

## Open question (resolved)

- **Route shape:** the plan called for `src/pages/guides/<id>.vue`
  where `<id>` is a kebab-case slug. The implementation uses
  single-word filenames where possible (e.g. `GettingStarted.vue`
  not `getting-started-guide.vue`). Vue's import system is
  case-sensitive on case-sensitive filesystems; the file names
  use PascalCase per the existing vd2 convention.
