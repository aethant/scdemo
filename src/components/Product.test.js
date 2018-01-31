/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Product } from './Product';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Product />', () => {
  let component = null;
  const mockAddItem = jest.fn();
  const mockRemoveItem = jest.fn();
  const props = {
    id: 1,
    price: '1.23',
    name: 'Test product',
    image: 'http://www.example.com/image.jpg',
    quantity: 0,
    addAnItem: mockAddItem,
    removeAnItem: mockRemoveItem
  };

  beforeEach(() => {
    component = shallow(<Product {...props} />);
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should fire addAnItem prop when click on add button', () => {
    component.instance().addProduct();
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should not fire removeAnItem prop when click on remove button and quantity is not present', () => {
    component.instance().removeProduct();
    expect(mockRemoveItem).not.toHaveBeenCalled();
  });

  it('should fire removeAnItem prop when click on remove button and quantity is present', () => {
    component.setProps({ quantity: 1 });
    component.instance().removeProduct();
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
