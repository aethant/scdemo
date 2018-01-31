/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let component = null;
  const username = {
    firstName: 'John',
    lastName: 'Smith'
  };

  beforeEach(() => {
    component = shallow(<Header {...username} />);
  });

  it('should render', () => {
    expect(component.length).toBe(1);
  });

  it('should use props to build use name', () => {
    expect(component.find('.username').text()).toEqual(
      `${username.firstName} ${username.lastName}`
    );
  });
});
