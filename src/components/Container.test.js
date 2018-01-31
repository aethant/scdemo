/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Container } from './Container';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Container />', () => {
  let component = null;
  const user = { firstName: 'John', lastName: 'Smith' };
  const subtotal = 123.45;
  const mockLoadData = jest.fn();

  beforeEach(() => {
    component = shallow(
      <Container
        loadData={mockLoadData}
        items={[{ key: 'a' }, { key: 'b' }, { key: 'c' }]}
        user={user}
        subtotal={subtotal}
      />
    );
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should call to load data', () => {
    expect(mockLoadData).toHaveBeenCalled();
  });

  it('should use the user information in the header', () => {
    expect(
      component
        .find('Header')
        .first()
        .props()
    ).toEqual(user);
  });

  it('should display the subtotal', () => {
    expect(
      component
        .find('Subtotal')
        .first()
        .props()
    ).toEqual({ subtotal: subtotal });
  });

  it('should display correct number of product children items', () => {
    expect(component.find('Connect(Product)').length).toEqual(3);
  });
});
