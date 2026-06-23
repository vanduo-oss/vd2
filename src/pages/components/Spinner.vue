<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdSpinner from "@/components/VdSpinner.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const spinnerHtml = '<span class="vd-spinner" role="status">…</span>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Spinner</h1>
        <p class="vd-lead">Animated loading indicator.</p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Sizes</h2>
        <div class="vd-inline vd-inline-md">
          <VdSpinner size="sm" />
          <VdSpinner size="md" />
          <VdSpinner size="lg" />
        </div>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="spinnerHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
