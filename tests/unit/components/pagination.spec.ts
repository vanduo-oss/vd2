import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdPagination from '@/components/VdPagination.vue';

describe('VdPagination', () => {
  it('renders prev and next buttons', () => {
    const wrapper = mount(VdPagination, {
      props: { modelValue: 1, total: 5 },
    });
    expect(wrapper.find('.vd-pagination-prev').exists()).toBe(true);
    expect(wrapper.find('.vd-pagination-next').exists()).toBe(true);
  });

  it('renders ellipsis for large totals', () => {
    const wrapper = mount(VdPagination, {
      props: { modelValue: 5, total: 20, siblingCount: 1 },
    });
    expect(wrapper.find('.vd-pagination-ellipsis').exists()).toBe(true);
  });

  it('disables prev on first page', () => {
    const wrapper = mount(VdPagination, {
      props: { modelValue: 1, total: 5 },
    });
    const prev = wrapper.find('.vd-pagination-prev');
    expect(prev.attributes('disabled')).toBeDefined();
  });

  it('emits update:modelValue on next click', async () => {
    const wrapper = mount(VdPagination, {
      props: { modelValue: 2, total: 5 },
    });
    await wrapper.find('.vd-pagination-next').trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([3]);
  });
});
