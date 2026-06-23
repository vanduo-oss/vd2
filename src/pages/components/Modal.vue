<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdModal from "@/components/VdModal.vue";
import VdButton from "@/components/VdButton.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const isOpen = ref(false);
const modalHtml = '<div class="vd-modal vd-modal-open">…</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Modal</h1>
        <p class="vd-lead">
          Dialog overlays with backdrop, focus trap, and Escape to close.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Example</h2>
        <VdButton @click="isOpen = true"> Open modal </VdButton>
        <VdModal v-model:open="isOpen" title="Confirm">
          <p>Are you sure you want to continue?</p>
          <template #footer>
            <div class="vd-inline vd-inline-md">
              <VdButton variant="ghost" @click="isOpen = false">
                Cancel
              </VdButton>
              <VdButton variant="primary" @click="isOpen = false">
                Confirm
              </VdButton>
            </div>
          </template>
        </VdModal>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="modalHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
