import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { flattenNav, type NavSection, type NavTree } from '@/nav';

export interface SearchResult {
  section: NavSection;
  score: number;
}

export const useSearchStore = defineStore('search', () => {
  const isOpen = ref(false);
  const query = ref('');
  let cachedNav: NavTree | null = null;
  let cachedSections: NavSection[] | null = null;

  const index = (tree: NavTree): NavSection[] => {
    if (cachedNav === tree && cachedSections) return cachedSections;
    cachedNav = tree;
    cachedSections = flattenNav(tree);
    return cachedSections;
  };

  const results = computed<SearchResult[]>(() => {
    const q = query.value.trim().toLowerCase();
    if (q.length < 2 || !cachedSections) return [];
    const out: SearchResult[] = [];
    for (const section of cachedSections) {
      const titleHit = section.title.toLowerCase().includes(q);
      const keywordHit = section.keywords.some((k) => k.toLowerCase().includes(q));
      const routeHit = section.route.toLowerCase().includes(q);
      if (titleHit || keywordHit || routeHit) {
        const score = titleHit ? 3 : keywordHit ? 2 : 1;
        out.push({ section, score });
      }
    }
    return out.sort((a, b) => b.score - a.score).slice(0, 20);
  });

  const open = (tree: NavTree): void => {
    index(tree);
    isOpen.value = true;
  };

  const close = (): void => {
    isOpen.value = false;
    query.value = '';
  };

  return { isOpen, query, results, open, close, index };
});