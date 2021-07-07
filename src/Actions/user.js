import api from "../APIs/api";
import * as actionType from "./helpers/actionType";

import authHeader from "./helpers/authHeader";

export const Fail = (errMsg) => {
  return {
    type: actionType.FAILED_USER,
    payload: errMsg,
  };
};

//return one specificc user
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

//check if you follow the selcted user 
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

//follow new user
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

//unfollow followed user
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

export const FailNames = (errMsg) => {
  return {
    type: actionType.FAILED_NAMES,
    payload: errMsg,
  };
};


//get following names
export const following = (id) => async (dispatch) => {
  try {
    const response = await api.get(
      `/user/following/${id}`,
      {
        headers: authHeader(),
      }
    );
    if (response.status === 200) {
      dispatch({
        type: actionType.FOLLOWING,
        payload: response.data,
      });
    } else {
      dispatch(FailNames("failed to add load following"));
    }
  } catch (error) {
    dispatch(FailNames(error.response.data));
  }
};


//get followers names
export const follower = (id) => async (dispatch) => {
  try {
    const response = await api.get(
      `/user/follower/${id}`,
      {
        headers: authHeader(),
      }
    );
    if (response.status === 200) {
      dispatch({
        type: actionType.FOLLOWER,
        payload: response.data,
      });
    } else {
      dispatch(FailNames("failed to add load followers"));
    }
  } catch (error) {
    dispatch(FailNames(error.response.data));
  }
};
