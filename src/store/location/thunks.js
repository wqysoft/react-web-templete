import * as actions from './actions';
import locationApi from '@/api/location';
import { message } from 'antd';

export const getLocation = () => async dispatch => {
  const res = await locationApi.getLocation();
  const {response: location } = res;
  dispatch(actions.getLocation(location[0]));
}

export const changeLocation = () => async dispatch => {
  dispatch(actions.changeLocation());
}