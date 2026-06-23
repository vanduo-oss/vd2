import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdStepper from '@/components/VdStepper.vue';

const items = [
  { id: 1, label: 'Step 1' },
  { id: 2, label: 'Step 2' },
  { id: 3, label: 'Step 3' },
];

describe('VdStepper', () => {
  it('renders all items', () => {
    const wrapper = mount(VdStepper, {
      props: { items, modelValue: 1 },
    });
    expect(wrapper.findAll('.vd-stepper-item').length).toBe(3);
  });

  it('marks current step', () => {
    const wrapper = mount(VdStepper, {
      props: { items, modelValue: 2 },
    });
    const itemsRendered = wrapper.findAll('.vd-stepper-item');
    expect(itemsRendered[1].classes()).toContain('is-current');
  });

  it('marks complete steps before current', () => {
    const wrapper = mount(VdStepper, {
      props: { items, modelValue: 2 },
    });
    const itemsRendered = wrapper.findAll('.vd-stepper-item');
    expect(itemsRendered[0].classes()).toContain('is-complete');
  });

  it('emits update:modelValue on clickable step click', async () => {
    const wrapper = mount(VdStepper, {
      props: { items, modelValue: 2, clickable: true },
    });
    const itemsRendered = wrapper.findAll('.vd-stepper-item');
    const button = itemsRendered[0].find('button');
    await button.trigger('click');
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toEqual(1);
  });
});
