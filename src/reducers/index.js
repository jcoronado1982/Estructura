import data from './data';
import modal from './modal';
import LoadingReducer from './loadingreducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  data,
  modal,
  LoadingReducer,
})

export default rootReducer;