import { createStore } from 'redux';

const initialState = [
  {
    "title": ""
  }
]

const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
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
