import schema from '../schemas/index.js';

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
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
