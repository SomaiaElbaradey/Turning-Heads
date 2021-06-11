
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

//delete existing comment
// export const deleteComment = (id) => async (dispatch) => {
//   try {
//     const response = await api.delete(`/blog/${id}`, { headers: authHeader() });
//     console.log(response);
//     if (response.status == 200) {
//       dispatch({
//         type: ActionType.DELETE_BLOG,
//         payload: response.data,
//       });
//     } else {
//       dispatch(errorBlogs("Unable to delete blog"));
//     }
//   } catch (error) {
//     console.log(error.response.data);
//     dispatch(errorBlogs(error.response.data));
//   }
// };