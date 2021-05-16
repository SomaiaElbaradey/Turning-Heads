import api from "../APIs/api";
import _ from "lodash";
import * as ActionType from "./helpers/actionType";

export const fetchBlogs = () => async dispatch => {
  const blogs = await api.get("/blog");

  dispatch({ type: ActionType.FETCH_BLOGS, payload: blogs.data });
};