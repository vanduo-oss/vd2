<script setup lang="ts">
import { useRouter } from 'vue-router';
import VdNavbarBrand from './VdNavbarBrand.vue';
import VdIcon from '@/components/VdIcon.vue';
import { nav } from '@/nav';

const router = useRouter();

const navTo = (route: string): void => {
  if (route === router.currentRoute.value.path) return;
  router.push(route);
};

const onSearchClick = (): void => {
  window.dispatchEvent(new CustomEvent('vd:open-search'));
};
</script>

<template>
  <header
    class="vd-navbar vd-navbar-glass vd-glass-contrast"
    role="banner"
  >
    <nav
      class="vd-navbar-inner vd-container"
      aria-label="Primary"
    >
      <VdNavbarBrand />
      <ul class="vd-navbar-links">
        <li
          v-for="page in nav.pages"
          :key="page.id"
        >
          <a
            class="vd-navbar-link"
            :href="page.route"
            @click.prevent="navTo(page.route)"
          >
            {{ page.title }}
          </a>
        </li>
      </ul>
      <div class="vd-navbar-actions">
        <button
          type="button"
          class="vd-btn vd-btn-ghost vd-btn-icon"
          aria-label="Open global search"
          data-search-trigger
          @click="onSearchClick"
        >
          <VdIcon name="magnifying-glass" />
        </button>
        <slot name="theme-switcher" />
      </div>
    </nav>
  </header>
</template>