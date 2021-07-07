import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

import authHeader from "./helpers/authHeader";

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
      dispatch(Fail("failed to load user data."));
    }
  } catch (error) {
    dispatch(Fail(error.response.data));
  }
};

export const isFollowed = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/user/isFollowed/${id}`, {
      headers: authHeader(),
    });
    if (response.status === 200) {
      dispatch({
        type: actionType.IS_FOLLOWED,
        payload: response.data,
      });
    } else {
      dispatch(Fail("failed to Know isFollowed"));
    }
  } catch (error) {
    dispatch(Fail(error.response.data));
  }
};

export const newFollow = (id) => async (dispatch) => {
  try {
    const response = await api.post(
      `/user/newFollow/${id}`,
      {},
      {
        headers: authHeader(),
      }
    );
    if (response.status === 200) {
      dispatch({
        type: actionType.NEW_FOLLOW,
        payload: response.data,
      });
    } else {
      dispatch(Fail("failed to add new following"));
    }
  } catch (error) {
    dispatch(Fail(error.response.data));
  }
};

export const unFollow = (id) => async (dispatch) => {
  try {
    const response = await api.patch(
      `/user/unfollow/${id}`,
      {},
      {
        headers: authHeader(),
      }
    );
    if (response.status === 200) {
      dispatch({
        type: actionType.UNFOLLOW,
        payload: response.data,
      });
    } else {
      dispatch(Fail("failed to add new following"));
    }
  } catch (error) {
    dispatch(Fail(error.response.data));
  }
};
