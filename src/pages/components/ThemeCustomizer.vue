<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdThemeCustomizer from '@/overlays/VdThemeCustomizer.vue';
import VdButton from '@/components/VdButton.vue';

const open = ref(false);

const customizerHtml = '<button class="vd-btn vd-btn-ghost" data-customizer-trigger>Customize</button>\n<div class="vd-theme-customizer" data-theme-customizer hidden>\n  ...sliders, color pickers, font selectors...\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Theme customizer
        </h1>
        <p class="vd-lead">
          Live-edit design tokens: colors, fonts, spacing, and
          radius. Persists to localStorage.
        </p>
      </header>

      <section
        id="demo"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Demo
        </h2>
        <VdButton
          variant="primary"
          @click="open = true"
        >
          Open customizer
        </VdButton>
        <VdThemeCustomizer
          v-if="open"
          @close="open = false"
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
          :code="customizerHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
