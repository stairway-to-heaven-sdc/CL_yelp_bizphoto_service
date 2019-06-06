import { mount } from 'enzyme';
import React from 'react';
import Category from '../Category';

describe('Render Category', () => {
  it('render correctly Category component', () => {
    const props = {
      price: '$$$',
      category: ['Steakhouses', 'Wine Bars'],
    };
    const CategoryComponent = mount(<Category {...props} />);
    expect(CategoryComponent).toMatchSnapshot();
  });
  it('check props with html tags', () => {
    const props = {
      price: '$',
      category: ['Chinese', 'Wine Bars', 'American'],
    };
    const CategoryComponent = mount(<Category {...props} />);
    expect(CategoryComponent.find('span.price-range').text()).toEqual('$');
    expect(CategoryComponent.find('span.category-list').text()).toEqual(' Chinese, Wine Bars, American ');
  });
});
