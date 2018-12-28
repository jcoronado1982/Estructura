
const initialState={
    show:true,
}

function loadingreducer(state,action){
    state =initialState;
    switch(action.type){
        case 'cargar':
        return initialState.show
        case 'reposo':
        return initialState.show
        default:
        return initialState.show
    }
}
export default loadingreducer;