<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdPreloader from '@/components/VdPreloader.vue';

const variants = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const basicHtml = '<div class="vd-preloader-container">\n  <div class="vd-preloader vd-preloader-primary">\n    <div class="vd-preloader-spinner"></div>\n  </div>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Preloader
        </h1>
        <p class="vd-lead">
          Page-level or section-level loading indicator.
        </p>
      </header>

      <section
        id="variants"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Variants
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdPreloader
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
          />
        </div>
      </section>

      <section
        id="sizes"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Sizes
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdPreloader
            v-for="size in sizes"
            :key="size"
            :size="size"
            variant="primary"
          />
        </div>
      </section>

      <section
        id="with-text"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          With text
        </h2>
        <VdPreloader
          variant="primary"
          text="Loading…"
        />
      </section>

      <section
        id="usage"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="basicHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
