import * as actionTypes from './ActionTypes';

export const increment = () => {
  return {
    type: actionTypes.COUNTER_INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.COUNTER_DECREMENT
  };
};

export const add = (payload = {}) => {
  return {
    type: actionTypes.COUNTER_ADD,
    value: payload.value
  };
};

export const asyncAction = (value) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add({value: value}));
    }, 2000)
  }
};