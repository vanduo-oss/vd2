<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface Option {
  value: string;
  label: string;
}

interface Props {
  modelValue: string;
  options: readonly Option[];
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type to search…',
  disabled: false,
  name: '',
  id: '',
});

const input = ref(props.modelValue);
const open = ref(false);
const activeIdx = ref(-1);

watch(
  () => props.modelValue,
  (v) => {
    input.value = v;
  },
);

const filtered = computed(() => {
  const q = input.value.trim().toLowerCase();
  if (!q) return props.options.slice(0, 10);
  return props.options
    .filter((o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q))
    .slice(0, 10);
});

const pick = (opt: Option): void => {
  input.value = opt.label;
  emit('update:modelValue', opt.value);
  open.value = false;
};

const onBlur = (): void => {
  window.setTimeout(() => {
    open.value = false;
  }, 150);
};

const onKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeIdx.value = Math.min(activeIdx.value + 1, filtered.value.length - 1);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeIdx.value = Math.max(activeIdx.value - 1, 0);
  } else if (event.key === 'Enter' && activeIdx.value >= 0) {
    event.preventDefault();
    pick(filtered.value[activeIdx.value]);
  } else if (event.key === 'Escape') {
    open.value = false;
  }
};
</script>

<template>
  <div
    class="vd-autocomplete-wrapper"
    :class="{ 'is-open': open }"
  >
    <input
      :id="id || name"
      type="text"
      class="vd-input"
      :value="input"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      autocomplete="off"
      role="combobox"
      :aria-expanded="open"
      aria-autocomplete="list"
      @input="(e) => { input = (e.target as HTMLInputElement).value; open = true; }"
      @focus="open = true"
      @blur="onBlur"
      @keydown="onKeydown"
    >
    <ul
      v-if="open && filtered.length > 0"
      class="vd-dropdown-menu"
      role="listbox"
    >
      <li
        v-for="(opt, idx) in filtered"
        :key="opt.value"
        class="vd-dropdown-item"
        :class="{ 'is-active': idx === activeIdx }"
        role="option"
        :aria-selected="idx === activeIdx"
        @mousedown.prevent="pick(opt)"
      >
        {{ opt.label }}
      </li>
    </ul>
  </div>
</template>
