import { shallowMount } from '@vue/test-utils';
import ReceiptCaptor from '@/components/ReceiptCaptor.vue';

describe('ReceiptCaptor.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ReceiptCaptor, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
