import _ from "lodash";

import api from "../APIs/api";
import * as ActionType from "./helpers/actionType";

export const fetchBlogs = () => async (dispatch) => {
  const allBlogs = await api.get("/blog");
  dispatch({ type: ActionType.FETCH_BLOGS, payload: allBlogs.data });
};

export const fetchUserBlogs = (id) => async (dispatch) => {
  const blogs = await api.get(`/blog/${id}`);
  dispatch({ type: ActionType.FETCH_USER_BLOGS, payload: blogs.data });
};

export const fetchOneBlog = (id) => async (dispatch) => {
  const oneBlog = await api.get(`/blog/${id}`);
  dispatch({ type: ActionType.FETCH_ONE_BLOG, payload: oneBlog.data });
};