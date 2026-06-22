<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <section class="vd-stack vd-stack-xl vd-center vd-pad-2xl">
    <h2 class="vd-h2">
      Coming soon
    </h2>
    <p class="vd-muted">
      The route <code>{{ route.fullPath }}</code> hasn't been ported yet.
      The full navigation tree arrives in the docs-routing-and-content
      change.
    </p>
  </section>
</template>