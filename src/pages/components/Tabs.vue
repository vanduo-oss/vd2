<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdTabs from "@/components/VdTabs.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "usage", label: "Usage" },
  { id: "api", label: "API" },
];
const active = ref("overview");
const tabsHtml =
  '<div class="vd-tabs"><button class="vd-tab is-active">A</button></div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Tabs</h1>
        <p class="vd-lead">
          Switch between sibling views without leaving the page.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Example</h2>
        <VdTabs v-model="active" :tabs="tabs">
          <div v-if="active === 'overview'">Overview content.</div>
          <div v-else-if="active === 'usage'">Usage content.</div>
          <div v-else>API reference.</div>
        </VdTabs>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="tabsHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
