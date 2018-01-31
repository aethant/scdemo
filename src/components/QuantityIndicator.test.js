/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import QuantityIndicator from './QuantityIndicator';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let component = null;
  const qty = 10;
  const strQty = 'test';

  beforeEach(() => {
    component = shallow(<QuantityIndicator quantity={qty} />);
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should render the proper quantity', () => {
    expect(component.prop('children')).toEqual(qty);
  });

  it('should display 0 if no quantity props are passed', () => {
    component.setProps({ quantity: null });
    expect(component.prop('children')).toEqual(0);
  });

  it('should display 0 if a non-integer value is passed via props', () => {
    component.setProps({ quantity: strQty });
    expect(component.prop('children')).toEqual(0);
  });
});
