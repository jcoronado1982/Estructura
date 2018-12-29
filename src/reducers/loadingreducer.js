
function LoadingReducer(state,action){
    switch(action.type){
        case 'reload':
        {return state}
        case 'reposo':
        return state
        default:
        return state
    }
}
export default LoadingReducer;