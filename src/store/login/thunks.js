import * as actions from './actions'
import loginApi from '@/api/login'
import { message } from 'antd'

const USER_ID_KEY = 'userId'
const TOKEN = 'token'

export const login = (data) => async (dispatch) => {
  dispatch(actions.loginStart())
  const res = await loginApi.loginIn(data)
  const { message: msg, ...userInfo } = res

  if (msg !== 'success') {
    dispatch(actions.loginFail())
    message.error(`登录失败`)
    return false
  }

  dispatch(actions.loginSuccess(userInfo))
  message.success('登录成功')
  localStorage.setItem(USER_ID_KEY, userInfo._id)
  localStorage.setItem(TOKEN, userInfo.token)
  return true
}

export const tryLogin = () => async (dispatch) => {
  const userId = localStorage.getItem(USER_ID_KEY)
  if (userId === null) {
    return
  }

  dispatch(actions.loginStart())
  const res = await loginApi.get(userId)
  const { errorCode, data: user } = res
  if (errorCode !== 200) {
    return dispatch(actions.loginFail())
  }

  dispatch(actions.loginSuccess(user))
}

/** 这里其实并没有异步操作，但为了统一，还是放在 thunk 中 */
export const logout = () => (dispatch) => {
  localStorage.removeItem(USER_ID_KEY)
  dispatch(actions.logout())
}
