<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';

const palettes = [
  {
    name: 'Primary',
    description: 'Brand-defining actions and emphasis.',
    shades: [
      { token: '--vd-primary-0', hex: '#f3f0ff' },
      { token: '--vd-primary-1', hex: '#e5dbff' },
      { token: '--vd-primary-2', hex: '#d0bfff' },
      { token: '--vd-primary-3', hex: '#b197fc' },
      { token: '--vd-primary-4', hex: '#9179f8' },
      { token: '--vd-primary-5', hex: '#7559f4' },
      { token: '--vd-primary-6', hex: '#5b3df0' },
      { token: '--vd-primary-7', hex: '#4829be' },
      { token: '--vd-primary-8', hex: '#371c8a' },
      { token: '--vd-primary-9', hex: '#25105b' },
    ],
  },
  {
    name: 'Success',
    description: 'Positive states, confirmations, growth.',
    shades: [
      { token: '--vd-success-5', hex: '#40c057' },
      { token: '--vd-success-6', hex: '#37b24d' },
      { token: '--vd-success-7', hex: '#2f9e44' },
    ],
  },
  {
    name: 'Warning',
    description: 'Cautionary states, pending actions.',
    shades: [
      { token: '--vd-warning-5', hex: '#fab005' },
      { token: '--vd-warning-6', hex: '#f59f00' },
      { token: '--vd-warning-7', hex: '#f08c00' },
    ],
  },
  {
    name: 'Error',
    description: 'Destructive states, validation failures.',
    shades: [
      { token: '--vd-error-5', hex: '#fa5252' },
      { token: '--vd-error-6', hex: '#f03e3e' },
      { token: '--vd-error-7', hex: '#e03131' },
    ],
  },
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Color palette
        </h1>
        <p class="vd-lead">
          Tokens that drive the entire design system — accessible by
          default, dark-mode aware, and consistent across components.
        </p>
      </header>

      <section
        v-for="palette in palettes"
        :id="palette.name.toLowerCase()"
        :key="palette.name"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          {{ palette.name }}
        </h2>
        <p>{{ palette.description }}</p>
        <div
          class="vd-grid"
          style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem;"
        >
          <div
            v-for="shade in palette.shades"
            :key="shade.token"
            class="vd-card"
            style="overflow: hidden; padding: 0;"
          >
            <div
              :style="`background-color: ${shade.hex}; height: 80px;`"
              aria-hidden="true"
            />
            <div style="padding: 0.5rem;">
              <code class="vd-text-xs">{{ shade.token }}</code>
              <div class="vd-text-sm vd-muted">
                {{ shade.hex }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
