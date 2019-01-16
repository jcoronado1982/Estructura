import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import Routes from './router.js';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const homeContainer = document.getElementById('app');

render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Routes/>
    </Provider>
  </BrowserRouter>
, homeContainer);