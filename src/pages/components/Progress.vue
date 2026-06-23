<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdProgress from "@/components/VdProgress.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const progressHtml =
  '<div class="vd-progress" role="progressbar" aria-valuenow="42">…</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Progress</h1>
        <p class="vd-lead">
          Linear progress bar with determinate and indeterminate modes.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Example</h2>
        <VdProgress :value="42" label="Uploading" />
        <VdProgress indeterminate label="Loading" />
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="progressHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
