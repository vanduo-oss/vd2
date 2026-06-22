import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdStack from '@/components/primitives/VdStack.vue';
import VdInline from '@/components/primitives/VdInline.vue';

describe('layout primitives', () => {
  it('VdStack applies vd-stack and gap class', () => {
    const wrapper = mount(VdStack, { props: { gap: 'lg' }, slots: { default: '<p>x</p>' } });
    expect(wrapper.classes()).toContain('vd-stack');
    expect(wrapper.classes()).toContain('vd-stack-lg');
  });

  it('VdInline applies gap and align classes', () => {
    const wrapper = mount(VdInline, {
      props: { gap: 'sm', align: 'end' },
      slots: { default: '<span>x</span>' },
    });
    expect(wrapper.classes()).toContain('vd-inline');
    expect(wrapper.classes()).toContain('vd-inline-sm');
    expect(wrapper.classes()).toContain('vd-inline-align-end');
  });
});