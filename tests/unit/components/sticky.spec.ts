import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdSticky from '@/components/VdSticky.vue';

describe('VdSticky', () => {
  it('renders default slot', () => {
    const wrapper = mount(VdSticky, {
      slots: { default: '<p>Stuck content</p>' },
    });
    expect(wrapper.html()).toContain('Stuck content');
    expect(wrapper.find('.vd-sticky').exists()).toBe(true);
  });

  it('applies vd-sticky class', () => {
    const wrapper = mount(VdSticky);
    expect(wrapper.classes()).toContain('vd-sticky');
  });
});
