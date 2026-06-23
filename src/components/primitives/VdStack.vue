<script setup lang="ts">
type Gap = "sm" | "md" | "lg" | "xl";

interface Props {
  gap?: Gap;
  as?: "div" | "section" | "ul" | "ol";
}

withDefaults(defineProps<Props>(), {
  gap: "md",
  as: "div",
});
</script>

<template>
  <component :is="as" :class="['vd-stack', `vd-stack-${gap}`]">
    <slot />
  </component>
</template>
