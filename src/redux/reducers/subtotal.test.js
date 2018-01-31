import * as actions from '../actions/items';
import reducer from './subtotal';

const initialState = 0;

describe('subtotal reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ITEM', () => {
    expect(
      reducer(0, {
        type: actions.ADD_ITEM,
        price: 1.23
      })
    ).toEqual(1.23);
  });

  it('should handle REMOVE_ITEM', () => {
    expect(
      reducer(1.23, {
        type: actions.REMOVE_ITEM,
        price: 1.23
      })
    ).toEqual(0);
  });
});
