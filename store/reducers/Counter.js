import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  const stateClone = { ...state };
  switch (
    action.type
    // case actionTypes.COUNTER_INCREMENT: stateClone.counter++; break;
    // case actionTypes.COUNTER_DECREMENT: stateClone.counter--; break;
    // case actionTypes.COUNTER_ADD: stateClone.counter += action.value; break;
  ) {
  }
  console.log('stateClone.loading: ' + stateClone.loading);
  return stateClone;
};

export default reducer;
