import * as actionTypes from './actionTypes'

export const getLocation = (payload) => ({
  type: actionTypes.GET_LOCATION,
  payload,
})

export const changeLocation = () => ({
  type: actionTypes.CHANGE_LOCATION,
})
