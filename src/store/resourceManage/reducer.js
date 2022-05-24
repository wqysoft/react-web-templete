import * as actionTypes from './actionTypes'

const initialState = {
  deviceTypes: [],
}

const resourceManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TYPES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default resourceManageReducer
