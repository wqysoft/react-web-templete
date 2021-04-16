import * as actionTypes from "./actionTypes";

const initialState = {
  location: {},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATION:
    case actionTypes.CHANGE_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export default locationReducer;
