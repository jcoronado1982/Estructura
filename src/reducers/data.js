import schema from '../schemas/index.js';

const initialState = {
  info: schema.entities,
  tablas: schema.result.grids,
  search: [],
}

function data(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data;
