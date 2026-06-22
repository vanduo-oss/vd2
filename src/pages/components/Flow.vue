<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdFlow from '@/components/VdFlow.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const index = ref(0);
const flowHtml = '<div class="vd-flow">…</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Flow
        </h1>
        <p class="vd-lead">
          A horizontal carousel for stepping through content.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Example
        </h2>
        <VdFlow
          v-model="index"
          :total="3"
        >
          <template #slide-0>
            <div class="vd-pad-2xl vd-center">
              Slide 1
            </div>
          </template>
          <template #slide-1>
            <div class="vd-pad-2xl vd-center">
              Slide 2
            </div>
          </template>
          <template #slide-2>
            <div class="vd-pad-2xl vd-center">
              Slide 3
            </div>
          </template>
        </VdFlow>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="flowHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>