<script setup lang="ts">
export interface StepperItem {
  id: string | number;
  label: string;
  description?: string;
}

interface Props {
  items: readonly StepperItem[];
  modelValue: string | number;
  vertical?: boolean;
  clickable?: boolean;
}

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  "item-click": [value: string | number];
}>();

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  clickable: false,
});

const isComplete = (idx: number): boolean => {
  const currentIdx = props.items.findIndex((it) => it.id === props.modelValue);
  return idx < currentIdx;
};

const isCurrent = (idx: number): boolean =>
  props.items[idx]?.id === props.modelValue;

const onClick = (id: string | number, idx: number): void => {
  if (!props.clickable) return;
  const currentIdx = props.items.findIndex((it) => it.id === props.modelValue);
  if (idx > currentIdx) return;
  emit("update:modelValue", id);
  emit("item-click", id);
};
</script>

<template>
  <ol class="vd-stepper" :class="{ 'vd-stepper-vertical': vertical }">
    <li
      v-for="(item, idx) in items"
      :key="item.id"
      class="vd-stepper-item"
      :class="{
        'is-complete': isComplete(idx),
        'is-current': isCurrent(idx),
        'vd-stepper-clickable': clickable,
      }"
    >
      <button
        v-if="clickable"
        type="button"
        class="vd-stepper-circle"
        :aria-current="isCurrent(idx) ? 'step' : undefined"
        :disabled="idx > items.findIndex((it) => it.id === modelValue)"
        @click="onClick(item.id, idx)"
      >
        {{ idx + 1 }}
      </button>
      <span v-else class="vd-stepper-circle" aria-hidden="true">{{
        idx + 1
      }}</span>
      <div class="vd-stepper-content">
        <div class="vd-stepper-label">
          {{ item.label }}
        </div>
        <div v-if="item.description" class="vd-stepper-description">
          {{ item.description }}
        </div>
      </div>
    </li>
  </ol>
</template>
