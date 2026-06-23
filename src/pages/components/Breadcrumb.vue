<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdBreadcrumb from "@/layout/VdBreadcrumb.vue";

const crumbs = [
  { label: "Components", href: "/components" },
  { label: "Layout" },
  { label: "Breadcrumb" },
];

const basicHtml =
  '<nav class="vd-breadcrumb" aria-label="Breadcrumb">\n  <ol class="vd-breadcrumb-list">\n    <li class="vd-breadcrumb-item">\n      <a href="/components" class="vd-breadcrumb-link">Components</a>\n    </li>\n  </ol>\n</nav>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Breadcrumb</h1>
        <p class="vd-lead">
          Hierarchical navigation trail showing the user's current location
          within a section.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Demo</h2>
        <div class="vd-card" style="padding: 1rem">
          <VdBreadcrumb :items="crumbs" />
        </div>
      </section>

      <section id="variants" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Sizes</h2>
        <div class="vd-card" style="padding: 1rem">
          <VdBreadcrumb class="vd-breadcrumb-sm" :items="crumbs" />
        </div>
        <div class="vd-card" style="padding: 1rem">
          <VdBreadcrumb class="vd-breadcrumb-lg" :items="crumbs" />
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
