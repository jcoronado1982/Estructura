import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
import Routes from './router.js';
import { BrowserRouter } from 'react-router-dom';
const initialState={
  load:true,
}
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const homeContainer = document.getElementById('app');
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </BrowserRouter>
, homeContainer);