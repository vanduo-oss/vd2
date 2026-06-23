<script setup lang="ts">
type Threshold = "sm" | "md" | "lg";

interface Props {
  threshold?: Threshold;
}

withDefaults(defineProps<Props>(), { threshold: "md" });
</script>

<template>
  <div :class="['vd-switcher', `vd-switcher-${threshold}`]">
    <slot />
  </div>
</template>
