import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

import authHeader from './helpers/authHeader';

export const Fail = (errMsg) => {
    return {
      type: actionType.FAILED_USER,
      payload: errMsg,
    };
  };

export const fetchUser = (id) => async (dispatch) => {
    try {
      const response = await api.get(`/user/${id}`, { headers: authHeader() });
      if (response.status === 200) {
        dispatch({
          type: actionType.FETCH_USER,
          payload: response.data,
        });
      } else {
        dispatch(Fail("failed to register"));
      }
    } catch (error) {
      dispatch(Fail(error.response.data));
    }
  };