import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VdWaypoint from '@/components/VdWaypoint.vue';

describe('VdWaypoint', () => {
  it('renders the wrapper div with data attribute', () => {
    const wrapper = mount(VdWaypoint, {
      slots: {
        default: '<nav><a href="#a">A</a><a href="#b">B</a></nav><div id="a">A</div><div id="b">B</div>',
      },
    });
    expect(wrapper.find('[data-vd-waypoint]').exists()).toBe(true);
  });

  it('contains a slotted nav', () => {
    const wrapper = mount(VdWaypoint, {
      slots: {
        default: '<a href="#x">x</a>',
      },
    });
    expect(wrapper.html()).toContain('href="#x"');
  });
});
