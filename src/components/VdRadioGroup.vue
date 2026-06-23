<script setup lang="ts">
interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  options: readonly RadioOption[];
  modelValue: string;
  name: string;
  inline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

withDefaults(defineProps<Props>(), {
  inline: false,
  size: 'md',
  disabled: false,
});
</script>

<template>
  <div
    class="vd-form-radio-group"
    :class="{ 'vd-form-radio-group-inline': inline }"
    role="radiogroup"
  >
    <div
      v-for="opt in options"
      :key="opt.value"
      class="vd-form-radio"
      :class="[
        `vd-form-radio-${size}`,
        { 'vd-form-radio-inline': inline },
      ]"
    >
      <input
        :id="`${name}-${opt.value}`"
        type="radio"
        :name="name"
        :value="opt.value"
        :checked="modelValue === opt.value"
        :disabled="disabled || opt.disabled"
        class="vd-form-radio-input"
        @change="emit('update:modelValue', opt.value)"
      >
      <label
        :for="`${name}-${opt.value}`"
        class="vd-form-radio-label"
      >
        {{ opt.label }}
      </label>
    </div>
  </div>
</template>
