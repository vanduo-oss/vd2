<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Runtime architecture
        </h1>
        <p class="vd-lead">
          How the framework's CSS and JS runtimes interact.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          CSS runtime
        </h2>
        <p>
          The framework's CSS is a single bundled file
          (<code>vanduo.min.css</code>). All classes are global;
          there's no per-component scoping. This is intentional:
          composability requires global class names.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          JS runtime (optional)
        </h2>
        <p>
          The framework's JS runtime (<code>vanduo.js</code>) is
          opt-in. Pure-CSS classes work without it. The JS
          components (datepicker, autocomplete, transfer, etc.)
          register themselves on the global <code>Vanduo</code>
          object.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          vd2's approach
        </h2>
        <p>
          vd2 does not load <code>window.Vanduo</code>. Instead, the
          Vd* SFCs reimplement the framework's JS behavior in Vue.
          This keeps vd2 decoupled from the framework's runtime and
          allows Vue's reactivity to drive state.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
