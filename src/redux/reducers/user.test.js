import * as actions from '../actions/items';
import reducer from './user';

const initialState = {
  username: {
    firstName: 'our favorite customer',
    lastName: ''
  }
};

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_DATA', () => {
    expect(
      reducer(
        {},
        {
          type: actions.LOAD_DATA
        }
      )
    ).toEqual({
      username: {
        firstName: 'Amber',
        lastName: 'Dyson'
      }
    });
  });
});
