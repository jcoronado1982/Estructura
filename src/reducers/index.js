import data from './data';
import modal from './modal';
import LoadingReducer from './loadingreducer';

import { combineReducers } from 'redux';

import { showUsers } from '../services/users'

const rootReducer = combineReducers({
  data,
  modal,
  LoadingReducer,
  user: showUsers,
})

export default rootReducer;