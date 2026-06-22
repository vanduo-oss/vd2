<script setup lang="ts">
import { RouterLink } from 'vue-router';
import VdButton from '@/components/VdButton.vue';
import VdInline from '@/components/primitives/VdInline.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <section class="vd-stack vd-stack-2xl vd-pad-3xl">
    <VdStack class="vd-stack-md vd-center vd-pad-2xl">
      <h1 class="vd-display">
        Vanduo Docs
      </h1>
      <p class="vd-lead">
        A zero-dependency CSS framework, now rebuilt for Vue 3.
      </p>
      <VdInline gap="md">
        <RouterLink
          v-slot="{ navigate }"
          to="/docs-landing"
          custom
        >
          <VdButton
            variant="primary"
            @click="navigate"
          >
            Read the docs
          </VdButton>
        </RouterLink>
        <RouterLink
          v-slot="{ navigate }"
          to="/quick-start"
          custom
        >
          <VdButton
            variant="secondary"
            @click="navigate"
          >
            Quick start
          </VdButton>
        </RouterLink>
      </VdInline>
    </VdStack>
  </section>
</template>