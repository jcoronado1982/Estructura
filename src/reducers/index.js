import data from './data';
import modal from './modal';
import loadingreducer from './loadingReducer';

import { combineReducers } from 'redux';
function LoadingReducer(state,action){
  switch(action.type){
      case 'isLoading':
      {return state={
        load:false,
      }}
      case 'isLoaded':
      {return state={
        load:true,
      }}
      default:
      return state
  }
}
export default LoadingReducer;