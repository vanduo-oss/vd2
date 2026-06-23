<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const html = `:root {
  --vd-color-primary: #5b3df0;
  --vd-spacing-md: 1rem;
  --vd-radius-md: 0.5rem;
}
[data-theme="dark"] {
  --vd-color-primary: #9179f8;
}`;
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          CSS variables &amp; theming
        </h1>
        <p class="vd-lead">
          Override framework tokens at the <code>:root</code> level
          to rebrand the entire design system.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Token categories
        </h2>
        <p>The framework exposes 100+ CSS variables in 5 groups:</p>
        <ul>
          <li><code>--vd-color-*</code> — primary, success, warning, error, neutral</li>
          <li><code>--vd-space-*</code> — Fibonacci spacing scale (3, 5, 8, 13, 21, …)</li>
          <li><code>--vd-radius-*</code> — corner radius scale</li>
          <li><code>--vd-font-*</code> — size, weight, family</li>
          <li><code>--vd-shadow-*</code> — elevation scale</li>
        </ul>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Override at the root
        </h2>
        <p>
          Add a stylesheet that loads after the framework bundle and
          set your tokens at <code>:root</code>:
        </p>
        <VdCodeSnippet
          language="css"
          :code="html"
        />
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Theme switching
        </h2>
        <p>
          Apply <code>[data-theme="dark"]</code> to a parent element
          (usually <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>)
          to switch palettes. The framework ships light, dark, and
          high-contrast palettes.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
