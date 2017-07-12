/**
 |--------------------------------------------------
 | Reducer
 |--------------------------------------------------
 */
 

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  error: '',
  loading: false,
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST:
      return { ...state, ...INITIAL_STATE, loading: true };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case actionTypes.SIGN_UP_FAILURE:
      return { ...state, ...INITIAL_STATE, error: action.payload };
    case actionTypes.SIGN_IN_REQUEST:
      return { ...state, ...INITIAL_STATE, loading: true };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case actionTypes.SIGN_IN_FAILURE:
      return { ...state, ...INITIAL_STATE, error: action.payload };
    case actionTypes.SET_INITIAL_STATE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;