import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

export const authFail = (errMsg) => {
  return {
    type: actionType.ERROR_AUTH,
    payload: errMsg,
  };
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.LOADING_AUTH,
    });
    const response = await api.post("/user/register", userData);
    console.log(response);
    if (response.status == 200) {
      dispatch({
        type: actionType.SUCCESS_AUTH,
        payload: response.data,
      });
    } else {
      dispatch(authFail("failed"));
    }
  } catch (error) {
    dispatch(authFail("failed"));
  }
};