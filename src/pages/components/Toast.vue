<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdButton from "@/components/VdButton.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import { useToast } from "@/composables/useToast";

const toast = useToast();
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Toast</h1>
        <p class="vd-lead">Lightweight, auto-dismissing notifications.</p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Example</h2>
        <div class="vd-inline vd-inline-md">
          <VdButton @click="toast.show('Saved', { variant: 'success' })">
            Show success
          </VdButton>
          <VdButton @click="toast.show('Heads up', { variant: 'info' })">
            Show info
          </VdButton>
          <VdButton
            @click="toast.show('Something failed', { variant: 'danger' })"
          >
            Show danger
          </VdButton>
        </div>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet
          language="ts"
          :code="`const toast = useToast();\ntoast.show('Saved', { variant: 'success' });`"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
