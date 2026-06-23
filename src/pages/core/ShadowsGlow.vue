<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';

const shadows = [
  { name: 'xs', token: '--vd-shadow-xs', css: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  { name: 'sm', token: '--vd-shadow-sm', css: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
  { name: 'md', token: '--vd-shadow-md', css: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
  { name: 'lg', token: '--vd-shadow-lg', css: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
  { name: 'xl', token: '--vd-shadow-xl', css: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' },
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Shadows & glow
        </h1>
        <p class="vd-lead">
          Elevation tokens for cards, modals, and popovers. Glow
          variants for primary-emphasis surfaces.
        </p>
      </header>

      <section
        id="shadows"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Shadow scale
        </h2>
        <div
          class="vd-grid"
          style="grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 2rem;"
        >
          <div
            v-for="s in shadows"
            :key="s.name"
            style="padding: 1rem; text-align: center;"
          >
            <div
              :style="`background: var(--vd-bg-primary); box-shadow: ${s.css}; height: 100px; border-radius: 8px; margin-bottom: 0.5rem;`"
            />
            <strong>{{ s.name }}</strong>
            <div class="vd-text-sm vd-muted">
              <code>{{ s.token }}</code>
            </div>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
