import { mount } from '@vue/test-utils';
import Counter from './Counter'

describe('counter test suite', () => {
  it('should just increment 1', () => {
    const wrapper = mount(Counter);
    const btn = wrapper.find('button');
    btn.trigger('click');
    expect(wrapper.vm.counter).toBe(1)
  })

  it('should render one', async () => {
    const wrapper = mount(Counter);
    const btn = wrapper.find('button');
    btn.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain('<span>1</span>')
  });
});

