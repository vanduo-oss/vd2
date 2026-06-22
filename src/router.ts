import type { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/home.vue';
import PlaceholderPage from '@/pages/_placeholder.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Vanduo Docs', keywords: ['vanduo', 'framework', 'css'] },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'placeholder',
    component: PlaceholderPage,
    meta: { title: 'Coming soon', keywords: [] },
  },
];