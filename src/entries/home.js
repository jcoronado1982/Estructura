import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
import Router from './routerPreset.js';
const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const homeContainer = document.getElementById('app');
render(
  <Provider store={store}>
    <Router />
  </Provider>
, homeContainer);