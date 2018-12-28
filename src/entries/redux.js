import { createStore } from 'redux';

const initialState = [
  {show:true,
  }
]
function handleLoading(event){
  event.preventDefault();
  store.dispatch(
    {
      type:'cargar',
      payload:{
        show:true,
      }
    }
  )
}

const reducer = function(state, action) {
  switch (action.type) {
    case 'reload':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function render() {
  
}
render();

function handleChange() {
  render();
}
store.subscribe(handleChange)
