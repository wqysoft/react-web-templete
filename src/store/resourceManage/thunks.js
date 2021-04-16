import * as actions from "./actions";
import resourceManageApi from "@/api/resourceManage";

export const getTypes = ({ level, area_name }) => async dispatch => {
  const res = await resourceManageApi.getCountByType(level, area_name);
  const { response: deviceTypes } = res;
  dispatch(actions.getTypes({ deviceTypes }));
  return true;
};
