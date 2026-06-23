<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';

const scale = [
  { name: 'xs', size: '0.75rem' },
  { name: 'sm', size: '0.875rem' },
  { name: 'base', size: '1rem' },
  { name: 'lg', size: '1.125rem' },
  { name: 'xl', size: '1.3125rem' },
  { name: '2xl', size: '1.6875rem' },
  { name: '3xl', size: '2.125rem' },
];

const weights = [
  { name: 'normal', weight: '400' },
  { name: 'medium', weight: '500' },
  { name: 'semibold', weight: '600' },
  { name: 'bold', weight: '700' },
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Typography
        </h1>
        <p class="vd-lead">
          Type scale and weights for headings, body, and code.
        </p>
      </header>

      <section
        id="scale"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Scale
        </h2>
        <div class="vd-stack vd-stack-sm">
          <div
            v-for="s in scale"
            :key="s.name"
            class="vd-stack vd-stack-xs"
          >
            <div
              :style="`font-size: ${s.size};`"
            >
              The quick brown fox
            </div>
            <code class="vd-text-sm vd-muted">--vd-font-size-{{ s.name }} ({{ s.size }})</code>
          </div>
        </div>
      </section>

      <section
        id="weights"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Weights
        </h2>
        <div class="vd-stack vd-stack-sm">
          <div
            v-for="w in weights"
            :key="w.name"
            :style="`font-weight: ${w.weight};`"
          >
            {{ w.name }} ({{ w.weight }}) — The quick brown fox
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
