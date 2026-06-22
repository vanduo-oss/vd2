<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdBadge from '@/components/VdBadge.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const badgeHtml = '<span class="vd-badge vd-badge-success">New</span>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Badge
        </h1>
        <p class="vd-lead">
          Compact status and count indicators.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Variants
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdBadge>Default</VdBadge>
          <VdBadge variant="success">
            Success
          </VdBadge>
          <VdBadge variant="warning">
            Warning
          </VdBadge>
          <VdBadge variant="danger">
            Danger
          </VdBadge>
        </div>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="badgeHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>