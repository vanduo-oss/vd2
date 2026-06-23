<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';

const ratios = [
  { ratio: '1:1.618', description: 'Golden ratio — page layout proportions, hero sections.' },
  { ratio: '1:1.414', description: 'Silver ratio — image dimensions, card aspect ratios.' },
  { ratio: '1.618:1', description: 'Wide golden — banner images, hero imagery.' },
  { ratio: '21:9', description: 'Cinema — full-bleed media, hero video.' },
];

const examples = [
  { width: 320, height: 200, label: 'Card' },
  { width: 480, height: 300, label: 'Hero' },
  { width: 800, height: 200, label: 'Banner' },
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Golden ratio
        </h1>
        <p class="vd-lead">
          The framework's design system is built on Fibonacci and
          golden-ratio proportions.
        </p>
      </header>

      <section
        id="ratios"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Common ratios
        </h2>
        <div class="vd-stack vd-stack-sm">
          <div
            v-for="r in ratios"
            :key="r.ratio"
            class="vd-card"
            style="padding: 1rem;"
          >
            <strong>{{ r.ratio }}</strong> — {{ r.description }}
          </div>
        </div>
      </section>

      <section
        id="examples"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Card examples
        </h2>
        <div
          class="vd-grid"
          style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;"
        >
          <div
            v-for="ex in examples"
            :key="ex.label"
            class="vd-card"
            style="overflow: hidden; padding: 0;"
          >
            <div
              :style="`background: linear-gradient(135deg, var(--vd-color-primary), var(--vd-primary-7)); height: ${ex.height}px; max-width: ${ex.width}px;`"
            />
            <div style="padding: 1rem;">
              <strong>{{ ex.label }}</strong>
              <div class="vd-text-sm vd-muted">
                {{ ex.width }}×{{ ex.height }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
