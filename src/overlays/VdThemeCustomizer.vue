<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useThemeStore } from "@/stores/theme";
import {
  FONT_OPTIONS,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  RADIUS_OPTIONS,
  type RadiusOption,
} from "@vanduo-oss/vue";

const theme = useThemeStore();
const isOpen = ref(false);

const open = (): void => {
  isOpen.value = true;
};
const close = (): void => {
  isOpen.value = false;
};
const toggle = (): void => {
  isOpen.value ? close() : open();
};

const onFont = (event: Event): void => {
  theme.setFont((event.target as HTMLSelectElement).value);
};

const onKeydown = (event: KeyboardEvent): void => {
  if (event.key === "Escape" && isOpen.value) close();
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("vd:open-customizer", open);
});
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("vd:open-customizer", open);
});

defineExpose({ open, close, toggle });
</script>

<template>
  <div class="vd-theme-customizer" :class="{ 'is-open': isOpen }">
    <button
      type="button"
      class="vd-theme-customizer-trigger"
      data-theme-customizer-trigger
      aria-label="Open theme customizer"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <i class="ph ph-paint-roller" aria-hidden="true"></i>
    </button>

    <Teleport to="body">
      <div
        class="vd-theme-customizer-overlay"
        :class="{ 'is-active': isOpen }"
        @click="close"
      ></div>

      <aside
        class="vd-theme-customizer-panel"
        :class="{ 'is-open': isOpen }"
        role="dialog"
        aria-label="Theme customizer"
      >
        <div class="vd-theme-customizer-panel-inner">
          <div class="tc-header">
            <h3 class="tc-title">Customize Theme</h3>
            <button
              type="button"
              class="customizer-mobile-close"
              aria-label="Close"
              @click="close"
            >
              <i class="ph ph-x"></i>
            </button>
          </div>
          <div class="tc-body">
            <!--
              Palette switch (Open Color / Fibonacci) intentionally hidden on
              the docs site for now — Open Color is the default everywhere.
              The framework customizer still ships the toggle; this is a vd2
              site-only override. Restore the `tc-section` with PALETTE_OPTIONS
              to bring it back.
            -->
            <div class="tc-section">
              <label class="tc-label">Primary Color</label>
              <div class="tc-color-grid">
                <button
                  v-for="c in PRIMARY_COLORS"
                  :key="c.key"
                  type="button"
                  class="tc-color-swatch"
                  :class="{ 'is-active': theme.primary === c.key }"
                  :data-color="c.key"
                  :style="{ '--vd-swatch-color': c.color }"
                  :title="c.name"
                  :aria-label="c.name"
                  @click="theme.setPrimary(c.key)"
                ></button>
              </div>
            </div>

            <div class="tc-section">
              <label class="tc-label">Neutral Color</label>
              <div class="tc-neutral-grid">
                <button
                  v-for="c in NEUTRAL_COLORS"
                  :key="c.key"
                  type="button"
                  class="tc-neutral-swatch"
                  :class="{ 'is-active': theme.neutral === c.key }"
                  :data-neutral="c.key"
                  :style="{ '--vd-swatch-color': c.color }"
                  :title="c.name"
                  @click="theme.setNeutral(c.key)"
                >
                  <span>{{ c.name }}</span>
                </button>
              </div>
            </div>

            <div class="tc-section">
              <label class="tc-label">Border Radius</label>
              <div class="tc-radius-group">
                <button
                  v-for="r in RADIUS_OPTIONS"
                  :key="r"
                  type="button"
                  class="tc-radius-btn"
                  :class="{ 'is-active': theme.radius === r }"
                  :data-radius="r"
                  @click="theme.setRadius(r as RadiusOption)"
                >
                  {{ r }}
                </button>
              </div>
            </div>

            <div class="tc-section">
              <label class="tc-label">Font Family</label>
              <select
                class="tc-font-select"
                data-customizer-font
                :value="theme.font"
                @change="onFont"
              >
                <option v-for="f in FONT_OPTIONS" :key="f.key" :value="f.key">
                  {{ f.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="tc-footer">
            <button
              type="button"
              class="customizer-reset btn btn-sm btn-outline"
              @click="theme.reset"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </aside>
    </Teleport>
  </div>
</template>
