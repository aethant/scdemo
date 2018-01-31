import * as actions from '../actions/items';
import reducer from './items';

const initialState = [];

describe('items reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_DATA', () => {
    expect(
      reducer([], {
        type: actions.LOAD_DATA
      }).length
    ).toEqual(12);
  });

  it('should add quantity to only the specificed product with ADD_ITEM', () => {
    const sample = { id: 1, name: 'Test', quantity: 0 };
    const sample2 = { id: 2, name: 'Another test', quantity: 0 };
    expect(
      reducer([sample, sample2], {
        type: actions.ADD_ITEM,
        id: 1
      })
    ).toEqual([{ ...sample, quantity: 1 }, sample2]);
  });

  it('should remove quantity from only the specificed product with REMOVE_ITEM', () => {
    const sample = { id: 1, name: 'Test', quantity: 0 };
    const sample2 = { id: 2, name: 'Another test', quantity: 1 };
    expect(
      reducer([sample, sample2], {
        type: actions.REMOVE_ITEM,
        id: 2
      })
    ).toEqual([sample, { ...sample2, quantity: 0 }]);
  });
});
