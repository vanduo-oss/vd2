<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdTimepicker from '@/components/VdTimepicker.vue';

const time = ref('14:30');

const timepickerHtml = '<input class="vd-input vd-timepicker" type="text">';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Timepicker
        </h1>
        <p class="vd-lead">
          24-hour time input with hour and minute columns.
        </p>
      </header>

      <section
        id="basic"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Basic
        </h2>
        <label>
          <span>Time</span>
          <VdTimepicker v-model="time" />
        </label>
        <p>Selected: {{ time }}</p>
      </section>

      <section
        id="usage"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="timepickerHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
