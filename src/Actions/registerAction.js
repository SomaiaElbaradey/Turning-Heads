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
    dispatch({
      type: actionType.LOADING_AUTH,
    });
    const response = await api.post("/user/register", userData);
    console.log(response);
    if (response.status == 200) {
      dispatch({
        type: actionType.SUCCESS_SIGNUP,
        // payload: response.data,
      });
    } else {
      dispatch(Fail("failed"));
    }
  } catch (error) {
    dispatch(Fail("failed"));
  }
};