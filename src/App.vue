<script setup lang="ts">
import { RouterView } from 'vue-router';
import VdNavbar from '@/layout/VdNavbar.vue';
import VdFooter from '@/layout/VdFooter.vue';
import VdThemeSwitcher from '@/overlays/VdThemeSwitcher.vue';
import VdThemeCustomizer from '@/overlays/VdThemeCustomizer.vue';
import GlobalSearchModal from '@/overlays/GlobalSearchModal.vue';
import VdToastContainer from '@/components/VdToastContainer.vue';
</script>

<template>
  <div class="vd-app">
    <VdNavbar>
      <template #theme-switcher>
        <VdThemeSwitcher />
      </template>
    </VdNavbar>
    <main class="vd-app-main">
      <RouterView />
    </main>
    <VdFooter />
    <VdThemeCustomizer />
    <GlobalSearchModal />
    <VdToastContainer />
  </div>
</template>