<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Migration comparison</h1>
        <p class="vd-lead">
          Migrating from other CSS frameworks to @vanduo-oss/framework.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">From Tailwind</h2>
        <p>
          Tailwind uses utility classes with arbitrary values
          (<code>text-[13px]</code>). Vanduo uses semantic class names with
          token-driven values. The translation is mostly mechanical:
        </p>
        <ul>
          <li><code>text-sm</code> → <code>vd-text-sm</code></li>
          <li><code>bg-blue-500</code> → <code>vd-bg-primary</code></li>
          <li><code>p-4</code> → <code>vd-pad-md</code></li>
          <li><code>rounded-lg</code> → <code>vd-radius-md</code></li>
        </ul>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">From Bootstrap</h2>
        <p>
          Bootstrap uses <code>.btn .btn-primary</code>. Vanduo uses
          <code>.vd-btn .vd-btn-primary</code>. The class names differ but the
          structure is similar.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">From Bulma</h2>
        <p>
          Bulma uses <code>.button.is-primary</code>. Vanduo uses
          <code>.vd-btn.vd-btn-primary</code>. Single-class composition instead
          of modifier classes.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
