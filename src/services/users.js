import { SHOW_USERS } from '../utility/apiRestAction'

const initialState = {
    list: []
}

export function showUsers(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_USERS:
         //   return Object.assign({}, state, {list: action.payload})
         return state
        default:
            return state 
    }
    
}
