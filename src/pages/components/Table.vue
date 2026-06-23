<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdTable from "@/components/VdTable.vue";

const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const rows = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Grace Hopper", role: "Architect", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Away" },
  { name: "Linus Torvalds", role: "Maintainer", status: "Active" },
];

const basicHtml =
  '<table class="vd-table">\n  <thead class="vd-table-header">\n    <tr><th>Name</th><th>Role</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Ada</td><td>Engineer</td></tr>\n  </tbody>\n</table>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Table</h1>
        <p class="vd-lead">
          Structured tabular data with optional striped, bordered, and hoverable
          variants.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <VdTable :columns="columns" :rows="rows" />
      </section>

      <section id="striped" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Striped</h2>
        <VdTable :columns="columns" :rows="rows" striped />
      </section>

      <section id="bordered" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Bordered</h2>
        <VdTable :columns="columns" :rows="rows" bordered />
      </section>

      <section id="hover" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Hoverable</h2>
        <VdTable :columns="columns" :rows="rows" hover />
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
