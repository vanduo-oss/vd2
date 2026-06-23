<script setup lang="ts">
type Variant = "default" | "success" | "warning" | "danger";

interface Props {
  variant?: Variant;
  pill?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: "default",
  pill: false,
});
</script>

<template>
  <span
    class="vd-badge"
    :class="[
      variant !== 'default' ? `vd-badge-${variant}` : null,
      pill ? 'vd-badge-pill' : null,
    ]"
  >
    <slot />
  </span>
</template>
