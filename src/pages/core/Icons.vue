<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdIcon from '@/components/VdIcon.vue';

const icons = [
  'house', 'user', 'gear', 'star', 'heart', 'magnifying-glass',
  'bell', 'envelope', 'calendar', 'clock', 'tag', 'bookmark-simple',
  'chart-bar', 'check', 'x', 'plus', 'minus', 'arrow-right',
  'caret-down', 'list', 'sidebar', 'squares-four', 'paint-brush',
  'sun', 'moon', 'circle-half', 'shapes', 'cube', 'browser',
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Icons
        </h1>
        <p class="vd-lead">
          Phosphor icon set with hundreds of glyphs available via the
          framework's icon bundle.
        </p>
      </header>

      <section
        id="examples"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Examples
        </h2>
        <div
          class="vd-grid"
          style="grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;"
        >
          <div
            v-for="name in icons"
            :key="name"
            class="vd-card"
            style="padding: 1rem; text-align: center;"
          >
            <VdIcon
              :name="name"
              size="lg"
            />
            <div class="vd-text-sm vd-muted">
              {{ name }}
            </div>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
