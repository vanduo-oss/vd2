<script setup lang="ts">
import { ref } from "vue";

type Size = "sm" | "md" | "lg";

interface Props {
  modelValue: number;
  max?: number;
  size?: Size;
  readonly?: boolean;
  name?: string;
}

const emit = defineEmits<{ "update:modelValue": [value: number] }>();

const props = withDefaults(defineProps<Props>(), {
  max: 5,
  size: "md",
  readonly: false,
  name: "",
});

const hover = ref(0);

const displayValue = (): number =>
  hover.value > 0 ? hover.value : props.modelValue;

const onStar = (i: number): void => {
  if (props.readonly) return;
  emit("update:modelValue", i);
};

const onStarEnter = (i: number): void => {
  if (props.readonly) return;
  hover.value = i;
};

const onLeave = (): void => {
  hover.value = 0;
};
</script>

<template>
  <div
    class="vd-rating"
    :class="[`vd-rating-${size}`, { 'vd-rating-readonly': readonly }]"
    role="radiogroup"
    :aria-label="`Rating: ${modelValue} of ${max}`"
    @mouseleave="onLeave"
  >
    <button
      v-for="i in max"
      :key="i"
      type="button"
      class="vd-rating-star"
      :class="{ 'is-filled': i <= displayValue() }"
      :aria-label="`${i} of ${max}`"
      :aria-pressed="modelValue === i"
      :tabindex="readonly ? -1 : 0"
      :disabled="readonly"
      @click="onStar(i)"
      @mouseenter="onStarEnter(i)"
    >
      ★
    </button>
    <span class="vd-rating-value" aria-live="polite"
      >{{ displayValue() }}/{{ max }}</span
    >
  </div>
</template>
