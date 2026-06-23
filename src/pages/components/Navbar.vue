<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdNavbar from "@/layout/VdNavbar.vue";

const basicHtml =
  '<header class="vd-navbar">\n  <nav class="vd-navbar-container vd-container">\n    <a class="vd-navbar-brand" href="/">Brand</a>\n    <ul class="vd-navbar-nav">\n      <li><a class="vd-nav-link" href="/">Home</a></li>\n    </ul>\n  </nav>\n</header>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Navbar</h1>
        <p class="vd-lead">
          Top-of-page navigation shell with brand, links, and actions.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Live demo</h2>
        <p>
          The site header is a live VdNavbar; this section renders an additional
          one for visual reference.
        </p>
        <div class="vd-card" style="overflow: hidden">
          <VdNavbar />
        </div>
      </section>

      <section id="variants" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Variants</h2>
        <p>
          Navbar supports
          <code>vd-navbar-glass</code>, <code>vd-navbar-fixed</code>,
          <code>vd-navbar-sticky</code>, and
          <code>vd-navbar-dark</code> modifier classes applied to the outer
          <code>&lt;header&gt;</code>.
        </p>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic markup</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
