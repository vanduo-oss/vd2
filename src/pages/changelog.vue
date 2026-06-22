<script setup lang="ts">
import VdStack from '@/components/primitives/VdStack.vue';
import VdBadge from '@/components/VdBadge.vue';

const releases = [
  { version: '1.5.1', date: '2026-04-12', tag: 'latest' as const },
  { version: '1.5.0', date: '2026-03-04', tag: null },
  { version: '1.4.2', date: '2026-01-22', tag: null },
];
</script>

<template>
  <article class="vd-stack vd-stack-xl vd-pad-2xl">
    <header class="vd-stack vd-stack-sm">
      <h1 class="vd-h1">
        Changelog
      </h1>
      <p class="vd-muted">
        Framework releases tracked by Vanduo.
      </p>
    </header>
    <VdStack gap="md">
      <article
        v-for="r in releases"
        :key="r.version"
        class="vd-card vd-pad-md"
      >
        <header class="vd-inline vd-inline-md">
          <h2 class="vd-h3">
            v{{ r.version }}
          </h2>
          <VdBadge
            v-if="r.tag === 'latest'"
            variant="success"
          >
            Latest
          </VdBadge>
          <time class="vd-muted vd-text-sm">{{ r.date }}</time>
        </header>
        <p>Bug fixes and accessibility improvements.</p>
      </article>
    </VdStack>
  </article>
</template>