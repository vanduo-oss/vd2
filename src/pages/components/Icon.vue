<script setup lang="ts">
// The `/components/icon` route has no docs source of its own — nav.ts maps it
// to a non-existent `components/icon.html`. The real icon documentation lives
// at `/core/icons` (core/icons.html). Reuse that page here rather than
// maintaining a divergent duplicate.
import Icons from "@/pages/core/Icons.vue";
</script>

<template>
  <Icons />
</template>
