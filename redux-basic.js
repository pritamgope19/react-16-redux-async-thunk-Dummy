const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  data: {},
};

// Reducer
const reducer = (state = initialState, action) => {
  const stateClone = { ...state };
  switch (action.type) {
    case 'INC_COUNTER':
      ++stateClone.counter;
      break;
    case 'DEC_COUNTER':
      --stateClone.counter;
      break;
  }
  return state;
};

// Store
const store = createStore(reducer());
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('subsribed: ' + state.getState());
});

// Dispatch action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'DEC_COUNTER' });
console.log(store.getState());
