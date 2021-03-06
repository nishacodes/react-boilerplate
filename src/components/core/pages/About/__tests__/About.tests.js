import React from 'react';
import {shallow} from 'enzyme';
import {About} from '../About.jsx';

const setup = (propOverrides) => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<About {...props} />);

  return {
    props,
    wrapper
  };
};

describe('<About />', () => {
  it('renders with default props', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('always renders with a div', () => {
    const { wrapper } = setup();
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // More tests here

});
