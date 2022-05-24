import * as actionTypes from './actionTypes'

const initialState = {
  isLogining: false,
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, isLogining: true }
    case actionTypes.LOGIN_FAIL:
      return { ...state, isLogining: false }
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isLogining: false, user: action.payload }
    case actionTypes.LOGOUT:
      return { ...state, user: null }
    default:
      return state
  }
}

export default loginReducer
