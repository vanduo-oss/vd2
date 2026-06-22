<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdIcon from '@/components/VdIcon.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const icons = ['house', 'star', 'gear', 'info', 'warning', 'check', 'x'];
const iconHtml = '<i class="ph ph-house"></i>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Icon
        </h1>
        <p class="vd-lead">
          Phosphor icons via the framework's icon font.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Examples
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdIcon
            v-for="name in icons"
            :key="name"
            :name="name"
            size="lg"
          />
        </div>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="iconHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>