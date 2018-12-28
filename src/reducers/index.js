import data from './data';
import modal from './modal';
import loadingreducer from './loadingreducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data,
  modal,
  show: loadingreducer,
})

export default rootReducer;
