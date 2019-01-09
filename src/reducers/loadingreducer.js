const initialState={
    load:true,
  }
function LoadingReducer(state = initialState,action){
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
        {return state={
            load:true,
          }}
    }
  }
export default LoadingReducer;