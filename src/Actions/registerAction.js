import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

export const Fail = (errMsg) => {
  return {
    type: actionType.FAILED_SIGNUP,
    payload: errMsg,
  };
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await api.post("/user/register", userData);
    if (response.status === 200) {
      dispatch({
        type: actionType.SUCCESS_SIGNUP,
        payload: response.data.message,
      });
    } else {
      dispatch(Fail("failed to register"));
    }
  } catch (error) {
    dispatch(Fail(error.response.data));
  }
};