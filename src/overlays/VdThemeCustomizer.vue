<script setup lang="ts">
import { ref } from "vue";
import { useThemeStore } from "@/stores/theme";
import type { RadiusName, FontName } from "@/composables/useTheme";

const theme = useThemeStore();

const primaryChoices = ["default", "warm", "cool", "forest", "rose", "sand"];
const neutralChoices = ["default", "warm", "cool", "slate"];
const radiusChoices: RadiusName[] = ["compact", "normal", "loose"];
const fontChoices: FontName[] = ["inter", "system", "mono"];

const isOpen = ref(false);
const toggle = (): void => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section class="vd-theme-customizer" :class="{ 'is-open': isOpen }">
    <button
      type="button"
      class="vd-btn vd-btn-ghost vd-btn-sm"
      aria-expanded="false"
      @click="toggle"
    >
      Customize theme
    </button>
    <div v-if="isOpen" class="vd-theme-customizer-panel vd-stack">
      <div class="vd-stack vd-stack-sm">
        <label class="vd-text-sm vd-muted" for="vd-tc-primary">Primary</label>
        <select
          id="vd-tc-primary"
          class="vd-input"
          :value="theme.primary()"
          @change="theme.setPrimary(($event.target as HTMLSelectElement).value)"
        >
          <option v-for="opt in primaryChoices" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>
      <div class="vd-stack vd-stack-sm">
        <label class="vd-text-sm vd-muted" for="vd-tc-neutral">Neutral</label>
        <select
          id="vd-tc-neutral"
          class="vd-input"
          :value="theme.neutral()"
          @change="theme.setNeutral(($event.target as HTMLSelectElement).value)"
        >
          <option v-for="opt in neutralChoices" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>
      <div class="vd-stack vd-stack-sm">
        <label class="vd-text-sm vd-muted" for="vd-tc-radius">Radius</label>
        <select
          id="vd-tc-radius"
          class="vd-input"
          :value="theme.radius()"
          @change="
            theme.setRadius(
              ($event.target as HTMLSelectElement).value as RadiusName,
            )
          "
        >
          <option v-for="opt in radiusChoices" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>
      <div class="vd-stack vd-stack-sm">
        <label class="vd-text-sm vd-muted" for="vd-tc-font">Font</label>
        <select
          id="vd-tc-font"
          class="vd-input"
          :value="theme.font()"
          @change="
            theme.setFont(
              ($event.target as HTMLSelectElement).value as FontName,
            )
          "
        >
          <option v-for="opt in fontChoices" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </div>
      <button
        type="button"
        class="vd-btn vd-btn-ghost vd-btn-sm"
        @click="theme.reset"
      >
        Reset to defaults
      </button>
    </div>
  </section>
</template>
