import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';

import Container from './components/Container';

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
