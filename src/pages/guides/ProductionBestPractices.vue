<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Production best practices
        </h1>
        <p class="vd-lead">
          Building, bundling, and shipping Vanduo to production.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Bundle the CSS once
        </h2>
        <p>
          Import the framework's CSS bundle exactly once at your
          app's entry point. Multiple imports cause cascade-order
          bugs.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Preload critical fonts
        </h2>
        <p>
          Add a <code>&lt;link rel="preload"&gt;</code> for the
          primary font to avoid FOUT (flash of unstyled text).
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Enable CSS purging
        </h2>
        <p>
          Use PurgeCSS or your bundler's tree-shaking to remove
          unused class definitions. The framework's class names
          start with <code>vd-</code> for easy pattern matching.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Defer non-critical JS
        </h2>
        <p>
          The framework's JS components can be lazy-loaded. The
          first paint should not wait for tooltip, popover, or
          datepicker JS to load.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
