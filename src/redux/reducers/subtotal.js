import { ADD_ITEM, REMOVE_ITEM } from '../actions/items';

const subtotal = (state = 0, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state + action.price;
    case REMOVE_ITEM:
      return state - action.price;
    default:
      return state;
  }
};

export default subtotal;
