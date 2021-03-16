import * as actionTypes from './actionTypes';

export const loginStart = () => ({
  type: actionTypes.LOGIN_START,
})

export const loginFail = () => ({
  type: actionTypes.LOGIN_FAIL,
})

export const loginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
})
