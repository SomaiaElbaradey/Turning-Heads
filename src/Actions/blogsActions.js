import _ from "lodash";

import api from "../APIs/api";
import * as ActionType from "./helpers/actionType";

import authHeader from './helpers/authHeader';

export const errorBlogs = () => {
  return {
    type: "ERROR_BLOG",
    payload: "Unable to get blog",
  };
};

export const fetchBlogs = () => async (dispatch) => {
  try {
    const allBlogs = await api.get("/blog");
    dispatch({ type: ActionType.FETCH_BLOGS, payload: allBlogs.data });
  } catch (error) {
    dispatch(errorBlogs("Unable to load blogs"));
  }
};

export const fetchUserBlogs = (id) => async (dispatch) => {
  try {
    const blogs = await api.get(`/blog/${id}`);
    dispatch({ type: ActionType.FETCH_USER_BLOGS, payload: blogs.data });
  } catch (error) {
    dispatch(errorBlogs("Unable to load blogs"));
  }
};

export const fetchOneBlog = (id) => async (dispatch) => {
  try {
    const oneBlog = await api.get(`/blog/${id}`);
    dispatch({ type: ActionType.FETCH_ONE_BLOG, payload: oneBlog.data });
  } catch (error) {
    dispatch(errorBlogs("Unable to load the blog"));
  }
};

export const addBlog = (blog) => async (dispatch) => {
  try {
    // dispatch({
    //   type: ActionType.FETCH_BLOGS,
    // });
    const response = await api.post("/blog", blog, { headers: authHeader() });
    console.log(response);
    if (response.status == 200) {
      dispatch({
        type: ActionType.ADD_BLOG,
        payload: response.data,
      });
    }
    dispatch(errorBlogs("Unable to add blog"));
  } catch (error) {
    console.log(error );
    dispatch(errorBlogs("Unable to add blog"));
  }
};
