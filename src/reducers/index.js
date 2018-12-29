import data from './data';
import modal from './modal';
import loadingreducer from './loadingReducer';

import { combineReducers } from 'redux';
function LoadingReducer(state,action){
  switch(action.type){
      case 'lend':
      {return state={
        load:false,
      }}
      case 'borrow':
      {return state={
        load:true,
      }}
      default:
      return state
  }
}
export default LoadingReducer;