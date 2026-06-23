<script setup lang="ts">
import { computed, ref } from "vue";

interface ListItem {
  id: string | number;
  label: string;
}

interface Props {
  source: readonly ListItem[];
  target: readonly ListItem[];
  sourceTitle?: string;
  targetTitle?: string;
  disabled?: boolean;
}

const emit = defineEmits<{
  "update:source": [value: ListItem[]];
  "update:target": [value: ListItem[]];
}>();

const props = withDefaults(defineProps<Props>(), {
  sourceTitle: "Available",
  targetTitle: "Selected",
  disabled: false,
});

const sourceSelected = ref<(string | number)[]>([]);
const targetSelected = ref<(string | number)[]>([]);

const move = (direction: "right" | "left"): void => {
  if (direction === "right") {
    const items = props.source.filter((i) =>
      sourceSelected.value.includes(i.id),
    );
    emit(
      "update:source",
      props.source.filter((i) => !sourceSelected.value.includes(i.id)),
    );
    emit("update:target", [...props.target, ...items]);
    sourceSelected.value = [];
  } else {
    const items = props.target.filter((i) =>
      targetSelected.value.includes(i.id),
    );
    emit("update:source", [...props.source, ...items]);
    emit(
      "update:target",
      props.target.filter((i) => !targetSelected.value.includes(i.id)),
    );
    targetSelected.value = [];
  }
};

const moveAll = (direction: "right" | "left"): void => {
  if (direction === "right") {
    emit("update:source", []);
    emit("update:target", [...props.target, ...props.source]);
  } else {
    emit("update:source", [...props.source, ...props.target]);
    emit("update:target", []);
  }
};

const sourceCount = computed(() => props.source.length);
const targetCount = computed(() => props.target.length);
</script>

<template>
  <div class="vd-transfer">
    <div class="vd-transfer-panel">
      <div class="vd-transfer-header">
        {{ sourceTitle }}
        <span class="vd-transfer-count">({{ sourceCount }})</span>
      </div>
      <ul class="vd-transfer-list">
        <li v-for="item in source" :key="item.id" class="vd-transfer-item">
          <label>
            <input
              type="checkbox"
              :value="item.id"
              :checked="sourceSelected.includes(item.id)"
              :disabled="disabled"
              @change="
                (e) => {
                  const checked = (e.target as HTMLInputElement).checked;
                  sourceSelected = checked
                    ? [...sourceSelected, item.id]
                    : sourceSelected.filter((id) => id !== item.id);
                }
              "
            />
            {{ item.label }}
          </label>
        </li>
      </ul>
    </div>
    <div class="vd-transfer-actions">
      <button
        type="button"
        class="vd-transfer-btn"
        :disabled="disabled || sourceSelected.length === 0"
        @click="move('right')"
      >
        ›
      </button>
      <button
        type="button"
        class="vd-transfer-btn"
        :disabled="disabled || source.length === 0"
        @click="moveAll('right')"
      >
        »
      </button>
      <button
        type="button"
        class="vd-transfer-btn"
        :disabled="disabled || targetSelected.length === 0"
        @click="move('left')"
      >
        ‹
      </button>
      <button
        type="button"
        class="vd-transfer-btn"
        :disabled="disabled || target.length === 0"
        @click="moveAll('left')"
      >
        «
      </button>
    </div>
    <div class="vd-transfer-panel">
      <div class="vd-transfer-header">
        {{ targetTitle }}
        <span class="vd-transfer-count">({{ targetCount }})</span>
      </div>
      <ul class="vd-transfer-list">
        <li v-for="item in target" :key="item.id" class="vd-transfer-item">
          <label>
            <input
              type="checkbox"
              :value="item.id"
              :checked="targetSelected.includes(item.id)"
              :disabled="disabled"
              @change="
                (e) => {
                  const checked = (e.target as HTMLInputElement).checked;
                  targetSelected = checked
                    ? [...targetSelected, item.id]
                    : targetSelected.filter((id) => id !== item.id);
                }
              "
            />
            {{ item.label }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
