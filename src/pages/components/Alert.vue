<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdAlert from "@/components/VdAlert.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const dismissed = ref(false);
const alertHtml = '<div class="vd-alert vd-alert-success"><p>Saved.</p></div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Alert</h1>
        <p class="vd-lead">Inline notices for status and warnings.</p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Variants</h2>
        <VdAlert variant="info" title="Heads up">
          A friendly informational note.
        </VdAlert>
        <VdAlert variant="success" title="Saved">
          Your changes are persisted.
        </VdAlert>
        <VdAlert variant="warning" title="Watch out">
          This action may take a moment.
        </VdAlert>
        <VdAlert
          v-if="!dismissed"
          variant="danger"
          title="Error"
          dismissible
          @dismiss="dismissed = true"
        >
          Something went wrong.
        </VdAlert>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="alertHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
