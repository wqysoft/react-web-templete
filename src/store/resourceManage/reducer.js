import * as actionTypes from './actionTypes';

const initialState = {
  deviceTypes: [],
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.GET_TYPES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
