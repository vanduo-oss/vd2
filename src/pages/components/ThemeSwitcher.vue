<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdThemeSwitcher from "@/overlays/VdThemeSwitcher.vue";

const current = ref("light");

const switcherHtml =
  '<div class="vd-theme-switcher" data-theme-ui="menu">\n  <button class="vd-btn vd-btn-ghost vd-btn-icon" data-theme-trigger>...</button>\n  <ul class="vd-dropdown-menu vd-dropdown-menu-end" data-theme-menu>\n    <li><button data-theme-value="light">Light</button></li>\n  </ul>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Theme switcher</h1>
        <p class="vd-lead">
          Cycle between light, dark, and high-contrast themes from the navbar.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Live demo</h2>
        <p>Use the theme switcher in the navbar to cycle themes.</p>
        <div
          class="vd-card"
          style="padding: 1rem; display: flex; gap: 1rem; align-items: center"
        >
          <span
            >Current: <strong>{{ current }}</strong></span
          >
          <VdThemeSwitcher />
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="switcherHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
