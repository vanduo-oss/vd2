<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdAccordion from '@/components/VdAccordion.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const items = [
  { id: 'one', title: 'What is Vanduo?', content: 'A zero-dependency CSS framework.' },
  { id: 'two', title: 'How do I install it?', content: 'Add @vanduo-oss/framework to your project.' },
  { id: 'three', title: 'Is it accessible?', content: 'Yes — keyboard, ARIA, contrast are first-class.' },
];
const open = ref<string>('one');
const accordionHtml = '<ul class="vd-accordion">…</ul>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Accordion
        </h1>
        <p class="vd-lead">
          Stack of collapsible sections.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Example
        </h2>
        <VdAccordion
          v-model="open"
          :items="items"
          exclusive
        />
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="accordionHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>