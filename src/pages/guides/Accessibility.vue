<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const table = `
<table class="vd-table vd-table-bordered">
  <thead>
    <tr><th>Element</th><th>Class</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td>Button</td><td>vd-btn</td><td>Interactive button</td></tr>
    <tr><td>Card</td><td>vd-card</td><td>Container with padding + shadow</td></tr>
    <tr><td>Input</td><td>vd-input</td><td>Text field</td></tr>
  </tbody>
</table>`;
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Accessibility essentials
        </h1>
        <p class="vd-lead">
          Build accessible interfaces with semantic HTML and the
          framework's ARIA-friendly components.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Use semantic HTML
        </h2>
        <p>
          Always start with the right element. Use
          <code>&lt;button&gt;</code> for actions, not
          <code>&lt;div&gt;</code>. Use
          <code>&lt;nav&gt;</code> for navigation regions. Use
          <code>&lt;main&gt;</code> for primary content.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Class ↔ role reference
        </h2>
        <p>
          The framework's classes assume semantic elements. If you
          must use a non-semantic element, add the matching ARIA
          role:
        </p>
        <VdCodeSnippet
          language="html"
          :code="table"
        />
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Focus management
        </h2>
        <p>
          Keyboard users navigate via Tab. Every interactive element
          MUST have a visible focus ring (the framework's
          <code>:focus-visible</code> styles provide this
          automatically).
        </p>
        <p>
          Modal dialogs trap focus while open. The framework's
          <code>VdModal</code> handles this via Teleport + a focus
          listener.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
