const initialState={
    show:true,
}

function LoadingReducer(state = initialState,action){
    switch(action.type){
        case 'reload':
        return initialState
        case 'reposo':
        return initialState
        default:
        return initialState
    }
}
export default LoadingReducer;