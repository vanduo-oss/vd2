<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Morph
        </h1>
        <p class="vd-lead">
          Shape-morphing animation for cards, buttons, and
          interactive surfaces.
        </p>
      </header>

      <section
        id="demo"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Variants
        </h2>
        <div
          class="vd-grid"
          style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;"
        >
          <div
            class="vd-card vd-morph"
            style="padding: 2rem; min-height: 120px; display: flex; align-items: center; justify-content: center;"
          >
            <strong>Hover to morph</strong>
          </div>
          <div
            class="vd-card vd-morph-blur"
            style="padding: 2rem; min-height: 120px; display: flex; align-items: center; justify-content: center;"
          >
            <strong>Blur morph</strong>
          </div>
          <div
            class="vd-card vd-morph-rotate"
            style="padding: 2rem; min-height: 120px; display: flex; align-items: center; justify-content: center;"
          >
            <strong>Rotate morph</strong>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
