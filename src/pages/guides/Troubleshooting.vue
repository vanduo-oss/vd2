<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Troubleshooting
        </h1>
        <p class="vd-lead">
          Common issues and their fixes.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          My components look unstyled
        </h2>
        <p>
          Check that the framework's CSS bundle loads BEFORE any
          app-level stylesheet. The bundle must be in the
          <code>&lt;head&gt;</code> of your HTML, or imported first
          in your JS entry point.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Dark mode isn't applying
        </h2>
        <p>
          The framework uses a <code>[data-theme="dark"]</code>
          attribute on a parent element (usually
          <code>&lt;html&gt;</code>). If your app sets
          <code>data-theme</code> on <code>&lt;body&gt;</code>
          instead, dark-mode overrides won't cascade to
          children.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          A component is missing styles
        </h2>
        <p>
          Some components are in optional bundles (charts,
          flowchart). Make sure the corresponding CSS file is
          imported.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Build size is too large
        </h2>
        <p>
          You're probably importing the full
          <code>vanduo.min.css</code>. Switch to per-component
          imports; see the Lazy Loading guide.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
