<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface DateParts {
  year: number;
  month: number;
  day: number;
}

interface Props {
  modelValue: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  placeholder?: string;
}

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const props = withDefaults(defineProps<Props>(), {
  min: "",
  max: "",
  disabled: false,
  placeholder: "YYYY-MM-DD",
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const parse = (s: string): DateParts | null => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
};

const format = (p: DateParts): string =>
  `${p.year}-${String(p.month).padStart(2, "0")}-${String(p.day).padStart(2, "0")}`;

const internal = ref<DateParts | null>(parse(props.modelValue));
const viewYear = ref(internal.value?.year ?? new Date().getFullYear());
const viewMonth = ref(internal.value?.month ?? new Date().getMonth() + 1);
const open = ref(false);

watch(
  () => props.modelValue,
  (v) => {
    const parsed = parse(v);
    internal.value = parsed;
    if (parsed) {
      viewYear.value = parsed.year;
      viewMonth.value = parsed.month;
    }
  },
);

watch(internal, (v) => {
  if (v) emit("update:modelValue", format(v));
});

const daysInMonth = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

const grid = computed((): (number | null)[] => {
  const first = new Date(viewYear.value, viewMonth.value - 1, 1);
  const firstDow = (first.getDay() + 6) % 7;
  const total = daysInMonth(viewYear.value, viewMonth.value);
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
});

const isSelected = (day: number): boolean =>
  internal.value?.year === viewYear.value &&
  internal.value?.month === viewMonth.value &&
  internal.value?.day === day;

const pick = (day: number): void => {
  if (props.disabled) return;
  internal.value = { year: viewYear.value, month: viewMonth.value, day };
  open.value = false;
};

const prevMonth = (): void => {
  if (viewMonth.value === 1) {
    viewMonth.value = 12;
    viewYear.value -= 1;
  } else {
    viewMonth.value -= 1;
  }
};

const nextMonth = (): void => {
  if (viewMonth.value === 12) {
    viewMonth.value = 1;
    viewYear.value += 1;
  } else {
    viewMonth.value += 1;
  }
};

const prevYear = (): void => {
  viewYear.value -= 1;
};
const nextYear = (): void => {
  viewYear.value += 1;
};

const onBlur = (): void => {
  window.setTimeout(() => {
    open.value = false;
  }, 200);
};

const isInRange = (day: number): boolean => {
  if (!props.min && !props.max) return true;
  const d = format({ year: viewYear.value, month: viewMonth.value, day });
  if (props.min && d < props.min) return false;
  if (props.max && d > props.max) return false;
  return true;
};

const display = computed(() => (internal.value ? format(internal.value) : ""));
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
      aria-label="Date picker"
    >
      <div class="vd-datepicker-header">
        <button
          type="button"
          class="vd-datepicker-prev"
          aria-label="Previous year"
          @click="prevYear"
        >
          «
        </button>
        <button
          type="button"
          class="vd-datepicker-month-btn"
          @click="viewMonth = 1"
        >
          {{ MONTHS[viewMonth - 1] }}
        </button>
        <button
          type="button"
          class="vd-datepicker-year-btn"
          @click="viewYear = viewYear"
        >
          {{ viewYear }}
        </button>
        <button
          type="button"
          class="vd-datepicker-next"
          aria-label="Next year"
          @click="nextYear"
        >
          »
        </button>
      </div>
      <div class="vd-datepicker-header">
        <button
          type="button"
          class="vd-datepicker-prev"
          aria-label="Previous month"
          @click="prevMonth"
        >
          ‹
        </button>
        <button type="button" class="vd-datepicker-title">
          {{ MONTHS[viewMonth - 1] }} {{ viewYear }}
        </button>
        <button
          type="button"
          class="vd-datepicker-next"
          aria-label="Next month"
          @click="nextMonth"
        >
          ›
        </button>
      </div>
      <div class="vd-datepicker-grid">
        <div v-for="d in WEEKDAYS" :key="d" class="vd-datepicker-weekdays">
          {{ d }}
        </div>
        <template v-for="(cell, idx) in grid" :key="idx">
          <div v-if="cell === null" class="vd-datepicker-day is-empty" />
          <button
            v-else
            type="button"
            class="vd-datepicker-day"
            :class="{
              'is-selected': isSelected(cell),
              'is-disabled': !isInRange(cell),
            }"
            :disabled="!isInRange(cell)"
            @click="pick(cell)"
          >
            {{ cell }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
