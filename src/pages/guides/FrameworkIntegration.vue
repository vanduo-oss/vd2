<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Framework integration</h1>
        <p class="vd-lead">
          Integrating @vanduo-oss/framework into existing Vue 3, React, and
          Svelte projects.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Vue 3</h2>
        <p>
          Import the framework's CSS bundle once in
          <code>main.ts</code>:
        </p>
        <p><code>import '@vanduo-oss/framework/css';</code></p>
        <p>Then use any framework class on any element.</p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">React</h2>
        <p>
          Same as Vue 3 — import the CSS in
          <code>main.tsx</code> / <code>index.js</code>. All framework classes
          are framework-agnostic.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Svelte</h2>
        <p>
          Same pattern — import the CSS in
          <code>main.ts</code>.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Vanilla HTML</h2>
        <p>
          Link the CSS file directly in your HTML
          <code>&lt;head&gt;</code>. No JavaScript required for pure-CSS
          classes.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
