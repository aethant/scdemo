/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Subtotal from './Subtotal';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Subtotal />', () => {
  let component = null;
  const subtotal = 1.23;
  const strSubtotal = '123';

  beforeEach(() => {
    component = shallow(<Subtotal subtotal={subtotal} />);
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should use props to build use name', () => {
    expect(component.find('.total').text()).toEqual(`$${subtotal}`);
  });

  it('should ', () => {
    component.setProps({ subtotal: strSubtotal });
    expect(component.find('.total').text()).toEqual('$0');
  });
});
