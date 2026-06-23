<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdTransfer from "@/components/VdTransfer.vue";

interface Item {
  id: number;
  label: string;
}

const initial: Item[] = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Banana" },
  { id: 3, label: "Cherry" },
  { id: 4, label: "Date" },
  { id: 5, label: "Elderberry" },
  { id: 6, label: "Fig" },
  { id: 7, label: "Grape" },
];

const source = ref<Item[]>(initial);
const target = ref<Item[]>([]);

const transferHtml =
  '<div class="vd-transfer">\n  <div class="vd-transfer-panel">...</div>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Transfer</h1>
        <p class="vd-lead">Two-pane list with bidirectional move buttons.</p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <VdTransfer
          v-model:source="source"
          v-model:target="target"
          source-title="Available"
          target-title="Selected"
        />
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="transferHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
