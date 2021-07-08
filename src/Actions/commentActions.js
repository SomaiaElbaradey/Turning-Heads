
import api from "../APIs/api";
import * as ActionType from "./helpers/actionType";

import authHeader from './helpers/authHeader';

export const errorComments = (err) => {
  return {
    type: ActionType.ERROR_COMMENT,
    payload: err,
  };
};

//post new comment
export const addComment = (id, comment) => async (dispatch) => {
  try {
    const response = await api.post(`/blog/comment/${id}`, comment, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.ADD_COMMENT,
        payload: response.data,
      });
    } else {
      dispatch(errorComments("Unable to add comment"));
    }
  } catch (error) {
    dispatch(errorComments(error.response.data));
  }
};

//get specific blog's comments 
export const fetchBlogComments = (id) => async (dispatch) => {
  try {
    const comments = await api.get(`/blog/comments/${id}`);
    dispatch({ type: ActionType.FETCH_BLOG_COMMENTS, payload: comments.data });
  } catch (error) {
    dispatch(errorComments(error.response.data));
  }
};

//delete existing comment
export const deleteComment = (id, comment) => async (dispatch) => {
  try {
    const response = await api.delete(`/blog/comment/${id}/${comment}`, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.DELETE_COMMENT,
        payload: response.data,
      });
    } else {
      dispatch(errorComments("Unable to delete comment"));
    }
  } catch (error) {
    dispatch(errorComments(error.response.data));
  }
};

//update one comment
export const editComment = (id, comment, body) => async (dispatch) => {
  try {
    const response = await api.patch(`/blog/comment/${id}/${comment}`, body, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.UPDATE_COMMENT,
        payload: response.data,
      });
    } else {
      dispatch(errorComments("Unable to edit comment"));
    }
  } catch (error) {
    console.log(error);
    dispatch(errorComments(error.response.data));
  }
};

//get one comment
export const fetchOneComment = (id, comment) => async (dispatch) => {
  try {
    const oneComment = await api.get(`/blog/comment/${id}/${comment}`);
    dispatch({ type: ActionType.FETCH_ONE_COMMENT, payload: [oneComment.data] });
  } catch (error) {
    dispatch(errorComments(error.response.data));
  }
};