<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface TimeParts {
  hour: number;
  minute: number;
}

interface Props {
  modelValue: string;
  minuteStep?: number;
  disabled?: boolean;
  placeholder?: string;
}

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const props = withDefaults(defineProps<Props>(), {
  minuteStep: 1,
  disabled: false,
  placeholder: "HH:MM",
});

const parse = (s: string): TimeParts | null => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(s);
  if (!m) return null;
  const hour = Number(m[1]);
  const minute = Number(m[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
  return { hour, minute };
};

const format = (p: TimeParts): string =>
  `${String(p.hour).padStart(2, "0")}:${String(p.minute).padStart(2, "0")}`;

const internal = ref<TimeParts | null>(parse(props.modelValue));
const open = ref(false);

watch(
  () => props.modelValue,
  (v) => {
    internal.value = parse(v);
  },
);

watch(internal, (v) => {
  if (v) emit("update:modelValue", format(v));
});

const display = computed(() => (internal.value ? format(internal.value) : ""));

const hours = computed(() => Array.from({ length: 24 }, (_, i) => i));
const minutes = computed(() => {
  const out: number[] = [];
  for (let m = 0; m < 60; m += props.minuteStep) out.push(m);
  return out;
});

const setHour = (h: number): void => {
  if (props.disabled) return;
  internal.value = { hour: h, minute: internal.value?.minute ?? 0 };
};

const setMinute = (m: number): void => {
  if (props.disabled) return;
  internal.value = { hour: internal.value?.hour ?? 0, minute: m };
};

const onBlur = (): void => {
  window.setTimeout(() => {
    open.value = false;
  }, 200);
};
</script>

<template>
  <div class="vd-datepicker" :class="{ 'is-open': open }">
    <input
      type="text"
      class="vd-input"
      :value="display"
      :placeholder="placeholder"
      :disabled="disabled"
      readonly
      @focus="open = true"
      @blur="onBlur"
    />
    <div
      v-if="open"
      class="vd-datepicker-popup"
      role="dialog"
      aria-label="Time picker"
    >
      <div
        class="vd-datepicker-grid"
        style="grid-template-columns: 1fr 1fr; gap: 0.5rem"
      >
        <div>
          <div class="vd-datepicker-weekdays">Hour</div>
          <div style="max-height: 200px; overflow-y: auto">
            <button
              v-for="h in hours"
              :key="h"
              type="button"
              class="vd-datepicker-day"
              :class="{ 'is-selected': internal?.hour === h }"
              @click="setHour(h)"
            >
              {{ String(h).padStart(2, "0") }}
            </button>
          </div>
        </div>
        <div>
          <div class="vd-datepicker-weekdays">Minute</div>
          <div style="max-height: 200px; overflow-y: auto">
            <button
              v-for="m in minutes"
              :key="m"
              type="button"
              class="vd-datepicker-day"
              :class="{ 'is-selected': internal?.minute === m }"
              @click="setMinute(m)"
            >
              {{ String(m).padStart(2, "0") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
