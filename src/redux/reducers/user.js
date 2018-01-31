import data from '../mockdata';
import { LOAD_DATA } from '../actions/items';

const initialState = {
  username: {
    firstName: 'our favorite customer',
    lastName: ''
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        username: {
          firstName: data.first_name,
          lastName: data.last_name
        }
      };
    default:
      return state;
  }
};

export default user;
