import schema from '../schemas/index.js';

const initialState = {
  dataGrids: schema.normalizedData.entities,
  idGrids: schema.normalizedData.result.grids,
  dataSessionsLabels: schema.sessionsData.entities,
  idSessionsLabels: schema.sessionsData.result.sessions,
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