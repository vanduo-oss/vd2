<script setup lang="ts">
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <article class="vd-stack vd-stack-xl vd-pad-2xl">
    <header class="vd-stack vd-stack-sm">
      <h1 class="vd-h1">kilo-oss</h1>
      <p class="vd-muted">Why this site is called vd2.</p>
    </header>
    <VdStack gap="md">
      <p>
        vd2 is the second iteration of the Vanduo docs site (the original being
        a vanilla HTML / JS shell). The "2" reflects the rebuild on Vue 3 and
        <code>vite-ssg</code>, not a version of the framework itself.
      </p>
      <p>
        kilo-oss is the open-source tooling stack used to author and maintain
        vd2 — pnpm, vite, vue-tsc, vitest, and Playwright.
      </p>
    </VdStack>
  </article>
</template>
