<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  modelValue: string;
  options: readonly SelectOption[];
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  id: "",
  placeholder: "",
  disabled: false,
  required: false,
});

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const internal = ref(props.modelValue);

watch(
  () => props.modelValue,
  (v) => {
    internal.value = v;
  },
);

const currentLabel = computed(
  () => props.options.find((o) => o.value === internal.value)?.label ?? "",
);
</script>

<template>
  <select
    :id="id || name"
    :name="name"
    :value="internal"
    :disabled="disabled"
    :required="required"
    class="vd-input"
    @change="
      (e) => {
        const v = (e.target as HTMLSelectElement).value;
        internal = v;
        emit('update:modelValue', v);
      }
    "
  >
    <option v-if="placeholder" value="" disabled>
      {{ placeholder }}
    </option>
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      :disabled="opt.disabled"
    >
      {{ opt.label }}
    </option>
  </select>
  <span class="vd-visually-hidden">{{ currentLabel }}</span>
</template>
