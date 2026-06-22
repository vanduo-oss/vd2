<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdTooltip from '@/components/VdTooltip.vue';
import VdButton from '@/components/VdButton.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const tooltipHtml = '<span data-tooltip="Save" data-tooltip-position="top">…</span>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Tooltip
        </h1>
        <p class="vd-lead">
          Hover-triggered inline hints.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Example
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdTooltip text="Save your changes">
            <VdButton variant="primary">
              Save
            </VdButton>
          </VdTooltip>
          <VdTooltip
            text="More information"
            position="right"
          >
            <VdButton variant="ghost">
              Info
            </VdButton>
          </VdTooltip>
        </div>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="tooltipHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>