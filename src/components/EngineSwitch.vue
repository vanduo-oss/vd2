<script setup lang="ts">
import { useEngineStore } from "@/stores/engine";
import { storeToRefs } from "pinia";

/**
 * Renders the documentation block for the currently selected engine. Wrap any
 * engine-specific content (a wiring code snippet, a JS-methods table body, …) in
 * the matching named slot — only one is rendered at a time.
 *
 *   <EngineSwitch>
 *     <template #vue3> …Vue 3 usage… </template>
 *     <template #vanilla> …Vanilla (zero-build) usage… </template>
 *   </EngineSwitch>
 *
 * v-if (not CSS hide) is used for simplicity: SSG pre-renders the default `vue3`
 * slot and a stored `vanilla` preference swaps in after hydration — a negligible
 * flash for static code blocks.
 */
const engineStore = useEngineStore();
const { engine } = storeToRefs(engineStore);
</script>

<template>
  <slot v-if="engine === 'vue3'" name="vue3" />
  <slot v-else name="vanilla" />
</template>
