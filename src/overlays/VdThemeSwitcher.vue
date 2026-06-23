<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import VdIcon from '@/components/VdIcon.vue';

const theme = useThemeStore();

const themes = [
  { id: 'light', label: 'Light', icon: 'sun' },
  { id: 'dark', label: 'Dark', icon: 'moon' },
  { id: 'high-contrast', label: 'High contrast', icon: 'circle-half' },
] as const;
</script>

<template>
  <div
    class="vd-theme-switcher vd-theme-switcher-menu-end"
    data-theme-ui="menu"
  >
    <button
      type="button"
      class="vd-btn vd-btn-ghost vd-btn-icon"
      aria-haspopup="menu"
      aria-label="Switch theme"
      data-theme-trigger
    >
      <VdIcon name="paint-brush" />
    </button>
    <ul
      class="vd-dropdown-menu vd-dropdown-menu-end vd-shadow-md"
      role="menu"
      data-theme-menu
    >
      <li
        v-for="opt in themes"
        :key="opt.id"
        role="none"
      >
        <button
          type="button"
          role="menuitemradio"
          :aria-checked="theme.theme() === opt.id"
          :data-theme-value="opt.id"
          class="vd-dropdown-item"
          :class="{ 'is-active': theme.theme() === opt.id }"
          @click="theme.setTheme(opt.id)"
        >
          <VdIcon :name="opt.icon" />
          <span>{{ opt.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>