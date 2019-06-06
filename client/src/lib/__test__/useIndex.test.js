import React from 'react';
import { mount, shallow } from 'enzyme';
import useIndex from '../useIndex';

const HookWrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
};
describe('useIndex', () => {
  it('should render', () => {
    const wrapper = mount(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should set init value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useIndex(0, 3)} />);
    let { hook } = wrapper.find('div').props();
    let { index, handleleft, handleright } = hook;
    expect(index).toEqual(0);
    wrapper = shallow(<HookWrapper hook={() => useIndex(2, 5)} />);
    ({ hook } = wrapper.find('div').props());
    ({ index, handleleft, handleright } = hook);
    expect(index).toEqual(2);
  });
  it('should change index when handleright is called', () => {
    const wrapper = shallow(<HookWrapper hook={() => useIndex(0, 3)} />);
    let { hook } = wrapper.find('div').props();
    let { index, handleleft, handleright } = hook;
    expect(index).toEqual(0);
    handleright();
    ({ hook } = wrapper.find('div').props());
    ({ index, handleleft, handleright } = hook);
    expect(hook).toHaveProperty('index', 1);
    expect(index).toEqual(1);
  });
  it('should change index when handleleft is called', () => {
    const wrapper = shallow(<HookWrapper hook={() => useIndex(1, 3)} />);
    let { hook } = wrapper.find('div').props();
    let { index, handleleft, handleright } = hook;
    expect(index).toEqual(1);
    handleleft();
    ({ hook } = wrapper.find('div').props());
    ({ index, handleleft, handleright } = hook);
    expect(index).toEqual(0);
  });
  it('should not decrease index when index is 0', () => {
    const wrapper = shallow(<HookWrapper hook={() => useIndex(0, 3)} />);
    let { hook } = wrapper.find('div').props();
    let { index, handleleft, handleright } = hook;
    expect(index).toEqual(0);
    handleleft();
    ({ hook } = wrapper.find('div').props());
    ({ index, handleleft, handleright } = hook);
    expect(index).toEqual(0);
  });
});
