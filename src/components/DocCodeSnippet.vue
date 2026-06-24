<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  /** The demo markup shown in the HTML tab (mirrors the legacy data-extract). */
  html: string;
  /** Optional CSS shown in a second tab. */
  css?: string;
}
const props = defineProps<Props>();

interface Lang {
  key: string;
  label: string;
  code: string;
}

const langs = computed<Lang[]>(() => {
  const list: Lang[] = [{ key: "html", label: "HTML", code: props.html }];
  if (props.css) list.push({ key: "css", label: "CSS", code: props.css });
  return list;
});

const expanded = ref(false);
const active = ref("html");
const copied = ref(false);

const toggle = (): void => {
  expanded.value = !expanded.value;
};

const activeCode = computed(
  () => langs.value.find((l) => l.key === active.value)?.code ?? "",
);

const copy = async (): Promise<void> => {
  if (typeof navigator === "undefined" || !navigator.clipboard) return;
  try {
    await navigator.clipboard.writeText(activeCode.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch {
    /* clipboard may be blocked */
  }
};
</script>

<template>
  <div
    class="vd-code-snippet"
    data-collapsible
    :data-expanded="expanded ? 'true' : 'false'"
  >
    <button
      class="vd-code-snippet-toggle"
      :aria-expanded="expanded"
      @click="toggle"
    >
      <span class="vd-code-snippet-toggle-icon"></span>
      <span>View Code</span>
    </button>
    <div
      class="vd-code-snippet-content"
      :data-visible="expanded ? 'true' : 'false'"
    >
      <div class="vd-code-snippet-header">
        <div class="vd-code-snippet-tabs" role="tablist">
          <button
            v-for="l in langs"
            :key="l.key"
            class="vd-code-snippet-tab"
            :class="{ 'is-active': active === l.key }"
            :data-lang="l.key"
            @click="active = l.key"
          >
            {{ l.label }}
          </button>
        </div>
        <button
          class="vd-code-snippet-copy"
          aria-label="Copy code"
          @click="copy"
        >
          <span class="vd-code-snippet-copy-icon"></span>
          <span class="vd-code-snippet-copy-text">{{
            copied ? "Copied" : "Copy"
          }}</span>
        </button>
      </div>
      <div class="vd-code-snippet-body">
        <pre
          v-for="l in langs"
          :key="l.key"
          class="vd-code-snippet-pane"
          :class="{ 'is-active': active === l.key }"
          :data-lang="l.key"
        ><code>{{ l.code }}</code></pre>
      </div>
    </div>
  </div>
</template>
