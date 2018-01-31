import { combineReducers } from 'redux';

import items from './items';
import user from './user';
import subtotal from './subtotal';

export default combineReducers({
  user,
  items,
  subtotal
});
