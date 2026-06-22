<script setup lang="ts">
interface Props {
  as?: keyof HTMLElementTagNameMap;
}

withDefaults(defineProps<Props>(), { as: 'div' });
</script>

<template>
  <component
    :is="as"
    class="vd-box"
  >
    <slot />
  </component>
</template>