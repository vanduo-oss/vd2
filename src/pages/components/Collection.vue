<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdCollection from "@/components/VdCollection.vue";

const items = [
  {
    id: 1,
    title: "Ada Lovelace",
    subtitle: "First programmer",
    action: "View",
  },
  {
    id: 2,
    title: "Grace Hopper",
    subtitle: "Compiler pioneer",
    action: "View",
  },
  {
    id: 3,
    title: "Alan Turing",
    subtitle: "Theoretical computer science",
    action: "View",
  },
];

const basicHtml =
  '<div class="vd-collection vd-collection-md">\n  <ul class="vd-collection-list">\n    <li class="vd-collection-item">\n      <div class="vd-collection-content">\n        <div class="vd-collection-text">\n          <strong class="vd-collection-title">Ada Lovelace</strong>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Collection</h1>
        <p class="vd-lead">
          Vertical list of items with optional header, hover state, and bordered
          variant.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <VdCollection header="Team" :items="items" />
      </section>

      <section id="hoverable" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Hoverable</h2>
        <VdCollection header="Hoverable" hoverable bordered :items="items" />
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
