<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { useFocusTrap } from '@/composables/useFocusTrap';
import { nav } from '@/nav';
import VdIcon from '@/components/VdIcon.vue';

const search = useSearchStore();
const router = useRouter();
const container = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const { activate, deactivate } = useFocusTrap(container);

const openFromEvent = (): void => {
  search.open(nav);
  void nextTick(() => inputRef.value?.focus());
};

const onClose = (): void => {
  search.close();
};

const onSelect = (route: string): void => {
  router.push(route);
  search.close();
};

const onKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    search.open(nav);
    void nextTick(() => inputRef.value?.focus());
  }
};

watch(
  () => search.isOpen,
  (open) => {
    if (open) {
      void nextTick(activate);
    } else {
      deactivate();
    }
  },
);

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('vd:open-search', openFromEvent);
    window.addEventListener('keydown', onKeydown);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('vd:open-search', openFromEvent);
    window.removeEventListener('keydown', onKeydown);
  }
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="search.isOpen"
      class="vd-modal vd-modal-open"
      role="dialog"
      aria-modal="true"
      aria-label="Global search"
    >
      <div
        class="vd-modal-backdrop"
        @click="onClose"
      />
      <div
        ref="container"
        class="vd-modal-panel vd-modal-panel-md vd-stack"
      >
        <div class="vd-search-input-row vd-stack vd-stack-sm">
          <label
            for="vd-search-input"
            class="vd-visually-hidden"
          >Search docs</label>
          <div class="vd-input-group">
            <VdIcon name="magnifying-glass" />
            <input
              id="vd-search-input"
              ref="inputRef"
              v-model="search.query"
              type="search"
              class="vd-input"
              placeholder="Search docs…"
              autocomplete="off"
              data-search-input
            >
          </div>
          <button
            type="button"
            class="vd-btn vd-btn-ghost vd-btn-sm"
            @click="onClose"
          >
            <VdIcon name="x" />
            <span>Close</span>
          </button>
        </div>
        <ul
          v-if="search.results.length > 0"
          class="vd-search-results"
          role="listbox"
          data-search-results
        >
          <li
            v-for="result in search.results"
            :key="result.section.id"
            role="option"
          >
            <button
              type="button"
              class="vd-search-result vd-stack vd-stack-sm"
              :data-route="result.section.route"
              @click="onSelect(result.section.route)"
            >
              <span class="vd-search-result-title">{{ result.section.title }}</span>
              <span class="vd-search-result-route vd-text-sm vd-muted">{{ result.section.route }}</span>
            </button>
          </li>
        </ul>
        <p
          v-else-if="search.query.length >= 2"
          class="vd-muted vd-text-sm"
        >
          No results for “{{ search.query }}”.
        </p>
        <p
          v-else
          class="vd-muted vd-text-sm"
        >
          Type at least 2 characters to search.
        </p>
      </div>
    </div>
  </Teleport>
</template>