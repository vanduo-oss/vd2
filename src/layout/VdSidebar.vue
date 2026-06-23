<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useNavStore } from "@/stores/nav";
import { nav } from "@/nav";
import VdSidebarFilter from "./VdSidebarFilter.vue";
import VdIcon from "@/components/VdIcon.vue";

const store = useNavStore();
const route = useRoute();

const componentsTab = computed(() =>
  nav.tabs.find((t) => t.id === "components"),
);

const matches = (text: string): boolean => {
  const q = store.filter.trim().toLowerCase();
  if (q.length === 0) return true;
  return text.toLowerCase().includes(q);
};

const activeId = computed(() => {
  if (route.path.startsWith("/components/")) {
    return route.path.replace("/components/", "");
  }
  return null;
});
</script>

<template>
  <aside class="vd-sidebar" aria-label="Documentation sidebar">
    <VdSidebarFilter v-if="componentsTab" />
    <nav v-if="componentsTab" class="vd-sidebar-nav">
      <div
        v-for="category in componentsTab.categories"
        :key="category.id"
        class="vd-sidebar-category"
      >
        <h3 class="vd-sidebar-category-title">
          <VdIcon v-if="category.icon" :name="category.icon" />
          <span>{{ category.title }}</span>
        </h3>
        <ul class="vd-sidebar-list">
          <li
            v-for="section in category.sections"
            v-show="
              matches(section.title) || section.keywords.some((k) => matches(k))
            "
            :key="section.id"
          >
            <RouterLink
              :to="section.route"
              class="vd-sidebar-link"
              :class="{ 'is-active': activeId === section.id }"
            >
              {{ section.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
