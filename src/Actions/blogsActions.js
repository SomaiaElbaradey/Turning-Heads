// import _ from "lodash";
import api from "../APIs/api";
import * as ActionType from "./helpers/actionType";

import authHeader from './helpers/authHeader';

export const errorBlogs = (err) => {
  return {
    type: ActionType.ERROR_BLOG,
    payload: err,
  };
};

//return all blogs in the site
export const fetchBlogs = () => async (dispatch) => {
  try {
    const allBlogs = await api.get("/blog");
    dispatch({ type: ActionType.FETCH_BLOGS, payload: allBlogs.data });
  } catch (error) {
    dispatch(errorBlogs(error.response.data));
  }
};

//get specific user blogs
export const fetchUserBlogs = (id) => async (dispatch) => {
  try {
    const blogs = await api.get(`/blog/${id}`);
    dispatch({ type: ActionType.FETCH_USER_BLOGS, payload: blogs.data });
  } catch (error) {
    dispatch(errorBlogs(error.response.data));
  }
};

//get one blog
export const fetchOneBlog = (id) => async (dispatch) => {
  try {
    const oneBlog = await api.get(`/blog/get/${id}`);
    dispatch({ type: ActionType.FETCH_ONE_BLOG, payload: [oneBlog.data] });
  } catch (error) {
    dispatch(errorBlogs(error.response.data));
  }
};

//post new blog
export const addBlog = (blog) => async (dispatch) => {
  try {
    const response = await api.post("/blog", blog, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.ADD_BLOG,
        payload: response.data,
      });
    } else {
      dispatch(errorBlogs("Unable to add blog"));
    }
  } catch (error) {
    // console.log(error.response.data);
    dispatch(errorBlogs(error.response.data));
  }
};

//delete existing blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    const response = await api.delete(`/blog/${id}`, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.DELETE_BLOG,
        payload: response.data,
      });
    } else {
      dispatch(errorBlogs("Unable to delete blog"));
    }
  } catch (error) {
    console.log(error.response.data);
    dispatch(errorBlogs(error.response.data));
  }
};

//update one blog
export const editBlog = (id, blog) => async (dispatch) => {
  try {
    const response = await api.patch(`/blog/${id}`, blog, { headers: authHeader() });
    if (response.status === 200) {
      dispatch({
        type: ActionType.UPDATE_BLOG,
        payload: response.data,
      });
    } else {
      dispatch(errorBlogs("Unable to edit blog"));
    }
  } catch (error) {
    console.log(error.response.data);
    dispatch(errorBlogs(error.response.data));
  }
};