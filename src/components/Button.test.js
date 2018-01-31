/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let component = null;
  const mockOnClick = jest.fn();
  const symbol = 'X';
  const alt = 'Test';

  beforeEach(() => {
    component = shallow(
      <Button alt={alt} symbol={symbol} action={mockOnClick} />
    );
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should fire action prop when clicked', () => {
    component.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should use the symbol prop as a label', () => {
    expect(component.prop('children')).toEqual(symbol);
  });

  it('should use the alt prop as alt button text', () => {
    expect(component.prop('title')).toEqual(alt);
  });
});
