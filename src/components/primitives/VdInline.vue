<script setup lang="ts">
type Gap = "sm" | "md" | "lg";
type Align = "start" | "center" | "end" | "baseline";

interface Props {
  gap?: Gap;
  align?: Align;
}

withDefaults(defineProps<Props>(), {
  gap: "md",
  align: "center",
});
</script>

<template>
  <div :class="['vd-inline', `vd-inline-${gap}`, `vd-inline-align-${align}`]">
    <slot />
  </div>
</template>
