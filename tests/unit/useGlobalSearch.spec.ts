import { describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useSearchStore } from '@/stores/search';
import { nav } from '@/nav';

describe('useSearchStore', () => {
  it('returns no results for queries shorter than 2 chars', () => {
    setActivePinia(createPinia());
    const search = useSearchStore();
    search.open(nav);
    search.query = 'b';
    expect(search.results).toHaveLength(0);
  });

  it('matches by section title', () => {
    setActivePinia(createPinia());
    const search = useSearchStore();
    search.open(nav);
    search.query = 'modal';
    expect(search.results.some((r) => r.section.id === 'modal')).toBe(true);
  });

  it('matches by keyword', () => {
    setActivePinia(createPinia());
    const search = useSearchStore();
    search.open(nav);
    search.query = 'dialog';
    expect(search.results.some((r) => r.section.id === 'modal')).toBe(true);
  });

  it('clears results on close', () => {
    setActivePinia(createPinia());
    const search = useSearchStore();
    search.open(nav);
    search.query = 'but';
    search.close();
    expect(search.isOpen).toBe(false);
    expect(search.query).toBe('');
  });
});