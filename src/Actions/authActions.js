import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

export const authFail = (errMsg) => {
  return {
    type: actionType.ERROR_AUTH,
    payload: errMsg,
  };
};

export const auth = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.LOADING_AUTH,
    });

    const response = await api.post("/user/login", userData);
      localStorage.setItem("token", response.data.webToken);
      localStorage.setItem("user", response.data.user);
      if (response.status == 200) {
        dispatch({
          type: actionType.SUCCESS_AUTH,
          payload: response.data,
        });
      } else {
          dispatch(authFail("Login failed"));
      }
  } catch (error) {
    dispatch(authFail(error.response.data));
  }
};

export const authLogout = () => {
  return {
    type: actionType.LOGOUT_AUTH,
  };
};