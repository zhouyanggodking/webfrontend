import { mount } from '@vue/test-utils';
import Counter from './Counter'
import { exportAllDeclaration } from '@babel/types';

describe('counter test suite', () => {
  it('just increment 1', () => {
    const wrapper = mount(Counter);
    const btn = wrapper.find('button');
    btn.trigger('click');
    expect(wrapper.vm.counter).toBe(1)
  })
});