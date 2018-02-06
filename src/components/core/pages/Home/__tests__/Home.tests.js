import React from 'react';
import {shallow} from 'enzyme';
import {Home} from '../Home.jsx';

const setup = (propOverrides) => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<Home {...props} />);

  return {
    props,
    wrapper
  };
};

describe('<Home />', () => {
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
