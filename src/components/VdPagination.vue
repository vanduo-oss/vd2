<script setup lang="ts">
import { computed } from 'vue';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  modelValue: number;
  total: number;
  siblingCount?: number;
  size?: Size;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
}

const emit = defineEmits<{ 'update:modelValue': [value: number] }>();

const props = withDefaults(defineProps<Props>(), {
  siblingCount: 1,
  size: 'md',
  align: 'left',
  disabled: false,
});

const pageNumbers = computed((): (number | 'ellipsis')[] => {
  const { modelValue, total, siblingCount } = props;
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const left = Math.max(modelValue - siblingCount, 2);
  const right = Math.min(modelValue + siblingCount, total - 1);
  const items: (number | 'ellipsis')[] = [1];
  if (left > 2) items.push('ellipsis');
  for (let i = left; i <= right; i++) items.push(i);
  if (right < total - 1) items.push('ellipsis');
  items.push(total);
  return items;
});

const go = (page: number): void => {
  if (props.disabled) return;
  if (page < 1 || page > props.total || page === props.modelValue) return;
  emit('update:modelValue', page);
};
</script>

<template>
  <nav
    class="vd-pagination"
    :class="[
      `vd-pagination-${size}`,
      `vd-pagination-${align}`,
    ]"
    aria-label="Pagination"
  >
    <button
      type="button"
      class="vd-pagination-prev"
      :disabled="disabled || modelValue <= 1"
      aria-label="Previous page"
      @click="go(modelValue - 1)"
    >
      ‹
    </button>
    <template
      v-for="(item, idx) in pageNumbers"
      :key="idx"
    >
      <span
        v-if="item === 'ellipsis'"
        class="vd-pagination-ellipsis"
        aria-hidden="true"
      >…</span>
      <button
        v-else
        type="button"
        class="vd-pagination-link vd-pagination-item"
        :class="{ 'is-active': item === modelValue }"
        :aria-current="item === modelValue ? 'page' : undefined"
        :disabled="disabled"
        @click="go(item)"
      >
        {{ item }}
      </button>
    </template>
    <button
      type="button"
      class="vd-pagination-next"
      :disabled="disabled || modelValue >= total"
      aria-label="Next page"
      @click="go(modelValue + 1)"
    >
      ›
    </button>
  </nav>
</template>
