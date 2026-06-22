<script setup lang="ts">
import { useRoute } from 'vue-router';
import VdSidebar from './VdSidebar.vue';
import VdBreadcrumb from './VdBreadcrumb.vue';
import { nav } from '@/nav';

const route = useRoute();

const breadcrumbItems = (): { label: string; href?: string }[] => {
  const items: { label: string; href?: string }[] = [];
  if (route.path.startsWith('/components/')) {
    const id = route.path.replace('/components/', '');
    const tab = nav.tabs.find((t) => t.id === 'components');
    if (tab) items.push({ label: tab.title, href: tab.categories[0] ? '/components' : undefined });
    for (const category of tab?.categories ?? []) {
      for (const section of category.sections) {
        if (section.id === id) {
          items.push({ label: category.title });
          items.push({ label: section.title });
          return items;
        }
      }
    }
  }
  const page = nav.pages.find((p) => p.route === route.path);
  if (page) items.push({ label: page.title });
  return items;
};
</script>

<template>
  <div class="vd-docs-layout">
    <VdSidebar />
    <div class="vd-docs-main">
      <VdBreadcrumb :items="breadcrumbItems()" />
      <article class="vd-docs-article">
        <slot />
      </article>
    </div>
  </div>
</template>