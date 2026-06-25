import { beforeEach, describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { useEngineStore } from '@/stores/engine';
import EngineSwitch from '@/components/EngineSwitch.vue';

describe('useEngineStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    window.localStorage.clear();
  });

  it('defaults to the Vue 3 engine', () => {
    const engine = useEngineStore();
    expect(engine.engine).toBe('vue3');
  });

  it('toggle flips the engine and persists to localStorage', () => {
    const engine = useEngineStore();
    engine.toggle();
    expect(engine.engine).toBe('legacy');
    expect(window.localStorage.getItem('vanduo-docs-engine')).toBe('legacy');
    engine.toggle();
    expect(engine.engine).toBe('vue3');
    expect(window.localStorage.getItem('vanduo-docs-engine')).toBe('vue3');
  });

  it('init() hydrates the stored preference', () => {
    window.localStorage.setItem('vanduo-docs-engine', 'legacy');
    const engine = useEngineStore();
    engine.init();
    expect(engine.engine).toBe('legacy');
  });
});

describe('EngineSwitch', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    window.localStorage.clear();
  });

  it('renders the vue3 slot by default', () => {
    const wrapper = mount(EngineSwitch, {
      slots: { vue3: '<p>VUE BLOCK</p>', legacy: '<p>LEGACY BLOCK</p>' },
    });
    expect(wrapper.text()).toContain('VUE BLOCK');
    expect(wrapper.text()).not.toContain('LEGACY BLOCK');
  });

  it('renders the legacy slot when the engine is legacy', () => {
    const engine = useEngineStore();
    engine.setEngine('legacy');
    const wrapper = mount(EngineSwitch, {
      slots: { vue3: '<p>VUE BLOCK</p>', legacy: '<p>LEGACY BLOCK</p>' },
    });
    expect(wrapper.text()).toContain('LEGACY BLOCK');
    expect(wrapper.text()).not.toContain('VUE BLOCK');
  });
});
