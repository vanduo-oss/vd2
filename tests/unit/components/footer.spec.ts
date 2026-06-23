import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdFooter from '@/layout/VdFooter.vue';

describe('VdFooter', () => {
  it('renders copyright text by default', () => {
    const wrapper = mount(VdFooter);
    expect(wrapper.text()).toMatch(/© \d{4} vanduo-oss/);
  });

  it('renders legal links by default', () => {
    const wrapper = mount(VdFooter);
    const links = wrapper.findAll('.vd-footer-link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders provided sections', () => {
    const wrapper = mount(VdFooter, {
      props: {
        sections: [
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
            ],
          },
        ],
      },
    });
    expect(wrapper.text()).toContain('Product');
    expect(wrapper.text()).toContain('Features');
    expect(wrapper.text()).toContain('Pricing');
  });

  it('hides copyright when showCopyright is false', () => {
    const wrapper = mount(VdFooter, {
      props: { showCopyright: false },
    });
    expect(wrapper.text()).not.toMatch(/© \d{4} vanduo-oss/);
  });
});
