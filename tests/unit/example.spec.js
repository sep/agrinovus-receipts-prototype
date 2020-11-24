import { shallowMount } from '@vue/test-utils';
import TicketCaptor from '@/components/TicketCaptor.vue';

describe('TicketCaptor.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(TicketCaptor);

    expect(wrapper.text()).toContain('Capture Ticket');
  });
});
