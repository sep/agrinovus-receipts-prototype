import { shallowMount } from '@vue/test-utils';
import TicketCaptor from '@/components/TicketCaptor.vue';

describe('TicketCaptor.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(TicketCaptor, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
