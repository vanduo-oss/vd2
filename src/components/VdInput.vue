<script setup lang="ts">
type Size = "sm" | "md" | "lg";
type Variant = "default" | "error" | "success";

interface Props {
  modelValue: string;
  type?: string;
  placeholder?: string;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  size: "md",
  variant: "default",
  disabled: false,
  readonly: false,
  required: false,
  name: "",
  id: "",
  minlength: undefined,
  maxlength: undefined,
  pattern: "",
  autocomplete: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

// Workaround for typed optional number props
const numberOrUndefined = (n: number | undefined): number | undefined => n;
void numberOrUndefined(props.minlength);
void numberOrUndefined(props.maxlength);
</script>

<template>
  <input
    :id="id || name"
    :type="type"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :minlength="minlength"
    :maxlength="maxlength"
    :pattern="pattern"
    :autocomplete="autocomplete"
    class="vd-input"
    :class="[
      `vd-input-${size}`,
      variant !== 'default' ? `vd-input-${variant}` : null,
    ]"
    @input="onInput"
    @blur="(e) => emit('blur', e)"
    @focus="(e) => emit('focus', e)"
  />
</template>
