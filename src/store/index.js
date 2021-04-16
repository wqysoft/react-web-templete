import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 惟一的要点是  当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 */
import loginReducer from "./login/reducer";
import resourceManageReducer from "./resourceManage/reducer";
import locationReducer from "./location/reducer";
// import * as loginThunks from './login/thunks';
const rootReducer = combineReducers({
  login: loginReducer,
  resourceManage: resourceManageReducer,
  location: locationReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// store.dispatch(loginThunks.tryLogin());
export default store;
