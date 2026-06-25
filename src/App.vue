<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import VdNavbar from "@/layout/VdNavbar.vue";
import VdFooter from "@/layout/VdFooter.vue";
import GlobalSearchModal from "@/overlays/GlobalSearchModal.vue";
import VdToastContainer from "@/components/VdToastContainer.vue";
import { useThemeStore } from "@/stores/theme";
import { useEngineStore } from "@/stores/engine";

const theme = useThemeStore();
const engine = useEngineStore();

onMounted(() => {
  theme.init();
  engine.init();
});
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <VdNavbar />

  <main
    id="main-content"
    style="padding-top: 80px; min-height: calc(100vh - 200px)"
  >
    <RouterView />
  </main>

  <VdFooter />

  <GlobalSearchModal />
  <VdToastContainer />
</template>
