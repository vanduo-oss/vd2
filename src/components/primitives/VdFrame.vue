<script setup lang="ts">
type Aspect = "square" | "video" | "portrait" | "wide";

interface Props {
  aspect?: Aspect;
}

withDefaults(defineProps<Props>(), { aspect: "video" });
</script>

<template>
  <div :class="['vd-frame', `vd-frame-${aspect}`]">
    <slot />
  </div>
</template>
