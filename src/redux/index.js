import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};
const reduxDevTools =
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = reduxDevTools || compose; // eslint-disable-line no-process-env
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, initialState, enhancer);

export default store;
