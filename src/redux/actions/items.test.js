import * as actions from './items';

describe('actions', () => {
  it('should trigger a load data action', () => {
    const expectedAction = {
      type: actions.LOAD_DATA
    };
    expect(actions.loadData()).toEqual(expectedAction);
  });

  it('should add an item', () => {
    const product = {
      price: '1.23'
    };
    const expectedAction = {
      type: actions.ADD_ITEM,
      ...product,
      price: parseFloat(product.price)
    };
    expect(actions.addAnItem(product)).toEqual(expectedAction);
  });

  it('should remove an item', () => {
    const product = {
      price: '1.23'
    };
    const expectedAction = {
      type: actions.REMOVE_ITEM,
      ...product,
      price: parseFloat(product.price)
    };
    expect(actions.removeAnItem(product)).toEqual(expectedAction);
  });
});
