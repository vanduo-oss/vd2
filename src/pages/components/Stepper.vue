<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdStepper from "@/components/VdStepper.vue";

const items = [
  { id: 1, label: "Cart", description: "Review items" },
  { id: 2, label: "Shipping", description: "Address & method" },
  { id: 3, label: "Payment", description: "Billing details" },
  { id: 4, label: "Review", description: "Confirm order" },
];
const current = ref(2);

const stepperHtml =
  '<ol class="vd-stepper">\n  <li class="vd-stepper-item is-current">...</li>\n</ol>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Stepper</h1>
        <p class="vd-lead">
          Multi-step process indicator with current/complete/pending states.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Horizontal</h2>
        <VdStepper v-model="current" :items="items" />
        <p>Current step: {{ current }}</p>
      </section>

      <section id="vertical" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Vertical</h2>
        <div style="max-width: 400px">
          <VdStepper
            v-model="current"
            :items="items"
            vertical
            clickable
            @item-click="(id) => (current = id as number)"
          />
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="stepperHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
