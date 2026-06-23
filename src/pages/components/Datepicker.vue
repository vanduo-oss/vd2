<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdDatepicker from "@/components/VdDatepicker.vue";

const date = ref("2026-06-23");

const datepickerHtml = '<input class="vd-input vd-datepicker" type="text">';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Datepicker</h1>
        <p class="vd-lead">
          Calendar-based date input with month and year navigation.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <label>
          <span>Date</span>
          <VdDatepicker v-model="date" />
        </label>
        <p>Selected: {{ date }}</p>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="datepickerHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
