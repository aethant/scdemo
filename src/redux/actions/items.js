const LOAD_DATA = 'smartcart/ITEMS/ACTION/LOAD_DATA';
const ADD_ITEM = 'smartcart/ITEMS/ACTION/ADD_ITEM';
const REMOVE_ITEM = 'smartcart/ITEMS/ACTION/REMOVE_ITEM';

const loadData = () => ({ type: LOAD_DATA });
const addAnItem = product => ({
  type: ADD_ITEM,
  ...product,
  price: parseFloat(product.price)
});
const removeAnItem = product => ({
  type: REMOVE_ITEM,
  ...product,
  price: parseFloat(product.price)
});

export { LOAD_DATA, ADD_ITEM, REMOVE_ITEM, loadData, addAnItem, removeAnItem };
