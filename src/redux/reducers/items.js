import { LOAD_DATA, ADD_ITEM, REMOVE_ITEM } from '../actions/items';

import data from '../mockdata';

function itemStore(state = [], action) {
  switch (action.type) {
    case LOAD_DATA:
      return [
        ...state,
        ...data.product_list.sort((a, b) => b.match - a.match).reduce(
          (accumulator, product, index) => [
            ...accumulator,
            {
              ...product,
              key: `${product.name}__${index}`,
              id: index,
              quantity: 0,
              price: parseFloat(
                product.price.slice(1, product.price.length)
              ).toFixed(2)
            }
          ],
          []
        )
      ];
    case ADD_ITEM:
      return state.map(
        product =>
          product.id === action.id
            ? { ...product, quantity: (product.quantity += 1) }
            : product
      );
    case REMOVE_ITEM:
      return state.map(
        product =>
          product.id === action.id
            ? { ...product, quantity: (product.quantity -= 1) }
            : product
      );
    default:
      return state;
  }
}

export default itemStore;
