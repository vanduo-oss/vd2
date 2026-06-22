import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { readPersistedTheme, useTheme } from '@/composables/useTheme';

const Harness = defineComponent({
  setup() {
    const theme = useTheme();
    return () => h('div', { 'data-theme': theme.theme() }, theme.theme());
  },
});

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-primary');
    document.documentElement.removeAttribute('data-neutral');
    document.documentElement.removeAttribute('data-radius');
    document.documentElement.removeAttribute('data-font');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not access localStorage when window is undefined (SSR)', () => {
    const originalWindow = globalThis.window;
    try {
      delete (globalThis as { window?: unknown }).window;
      expect(readPersistedTheme()).toBeNull();
    } finally {
      (globalThis as { window?: unknown }).window = originalWindow;
    }
  });

  it('applies defaults on mount when no preference is stored', async () => {
    mount(Harness);
    await nextTick();
    await flushPromises();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(document.documentElement.getAttribute('data-radius')).toBe('normal');
    expect(document.documentElement.getAttribute('data-font')).toBe('inter');
  });

  it('restores a stored preference on mount', async () => {
    window.localStorage.setItem(
      'vanduo-theme-preference',
      JSON.stringify({ theme: 'dark', primary: 'cool', neutral: 'slate', radius: 'loose', font: 'mono' }),
    );
    const wrapper = mount(Harness);
    await nextTick();
    await flushPromises();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-primary')).toBe('cool');
    expect(document.documentElement.getAttribute('data-radius')).toBe('loose');
    expect(document.documentElement.getAttribute('data-font')).toBe('mono');
    expect(wrapper.attributes('data-theme')).toBe('dark');
  });

  it('persists setTheme to localStorage', async () => {
    const harnessRef: { setTheme?: (t: 'dark') => void } = {};
    const Capture = defineComponent({
      setup() {
        const theme = useTheme();
        harnessRef.setTheme = theme.setTheme;
        return () => h('div');
      },
    });
    mount(Capture);
    await nextTick();
    await flushPromises();
    harnessRef.setTheme!('dark');
    await nextTick();
    const stored = JSON.parse(window.localStorage.getItem('vanduo-theme-preference') ?? '{}');
    expect(stored.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});