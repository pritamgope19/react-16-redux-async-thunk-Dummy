import * as actionTypes from './ActionTypes';

export const getTrending = () => {
  return {
    type: actionTypes.GET_TRENDING,
    value: payload.value,
  };
};

export const getTopRated = () => {
  return {
    type: actionTypes.GET_TOPRATED,
    value: payload.value,
  };
};

export const getPopular = (payload = {}) => {
  return {
    type: actionTypes.GET_POPULAR,
    value: payload.value,
  };
};

export const asyncAction = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add({ value: value }));
    }, 2000);
  };
};
