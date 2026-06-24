## Context

vd2 mirrors the legacy `docs/` site, which layers the framework CSS
(`vanduo.min.css`) with a large docs-specific stylesheet
(`docs/css/app.css`, ~89KB). vd2 ports that stylesheet verbatim to
`src/styles/docs.css` (font urls repointed to `/fonts/`). Because the
styling is identical, recreating a page is mostly **DOM transcription**:
emit the same `vd-*`/docs class names the legacy HTML uses and the ported
CSS styles them for free. The legacy framework JS is NOT loaded, so any
interactivity is reimplemented in Vue/Pinia driving the same `data-*`
attributes the CSS reads.

## The component-page template

Each docs section page is `pages/<area>/<Name>.vue`:

```
<DocsLayout>
  <section id="<section-id>">
    <h5 class="demo-title"><i class="ph ph-<icon>"></i><Title></h5>
    <!-- repeat: -->
    <div class="vd-row">
      <div class="vd-col-12 vd-col-md-6">
        <div class="vd-card vd-card-glow demo-card">
          <div class="vd-card-header"><h6><Demo title></h6></div>
          <div class="vd-card-body"><!-- live demo, static framework HTML --></div>
        </div>
        <DocCodeSnippet :html="<demo html>" :css="<optional css>" />
      </div>
    </div>
    <!-- API / class-reference tables, accessibility notes -->
  </section>
</DocsLayout>
```

Source HTML lives in `docs/sections/components/<name>.html` (note
plurals: `buttons.html`, `badges.html`, `alerts.html`, `cards.html`).
Copy demo markup verbatim; lift code-snippet text into `DocCodeSnippet`
`:html`/`:css` props; data-drive long reference tables.

## Gotchas (load-bearing)

1. `docs.css` ships `#docs-view { display:none }` (the legacy SPA toggled
   it via JS). The `DocsLayout` wrapper MUST carry `class="is-active"`
   and `:data-doc-tab="components|guides"` (the latter gates `.demo-card`
   glow styling).
2. `DocCodeSnippet` reveal is `.vd-code-snippet-content[data-visible="true"]`
   — `v-show` cannot win against the framework's base `display:none`. The
   collapse chevron uses the parent `[data-expanded]` attribute.
3. Page-specific inline `<style>` blocks in legacy sections (e.g.
   `about.html` founders message) become a `<style scoped>` block.
4. Assets referenced by pages (logos, flags) are copied into
   `vd2/public/` and referenced with absolute `/…` paths.

## Goals / Non-Goals

**Goals:** pixel/UX parity per page; openspec tasks updated before code;
each batch independently green (`vue-tsc` + `vitest` + `vite-ssg`).

**Non-Goals:** redesigning any page; porting framework JS wholesale;
changing `nav.ts` taxonomy (the sidebar renders vd2's existing
categories, which differ slightly in grouping from the legacy
`sections.json` but match visually).

## Batch plan

Batches follow `nav.ts` categories so each is a coherent, shippable unit.
Order: Core → Feedback → Data display → Interactive → Forms → Primitives
→ Layout → Effects → Theme → Core/Foundation → Guides → remaining
top-level pages (quick-start, changelog, kilo-oss). See `tasks.md`.
