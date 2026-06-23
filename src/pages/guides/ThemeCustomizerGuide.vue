<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Theme customizer guide
        </h1>
        <p class="vd-lead">
          Live-editing design tokens in the browser.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          What it does
        </h2>
        <p>
          The <code>VdThemeCustomizer</code> is a portal-rendered
          panel with sliders, color pickers, and font selectors.
          Changes are applied to the live document and persisted to
          <code>localStorage</code>.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Tokens you can edit
        </h2>
        <ul>
          <li>Primary color (hex picker)</li>
          <li>Body font (Google Fonts dropdown)</li>
          <li>Heading font (Google Fonts dropdown)</li>
          <li>Border radius (slider 0–24px)</li>
          <li>Spacing scale (slider 0.5–2x)</li>
        </ul>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Persistence
        </h2>
        <p>
          Customizations are saved per-browser to
          <code>localStorage</code> under the key
          <code>vanduo-theme-custom</code>. To reset, clear the
          storage or use the "Reset" button in the customizer
          panel.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
