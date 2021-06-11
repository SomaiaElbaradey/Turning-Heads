import { combineReducers } from "redux";
import { blogs } from "./blog/blogs";
import { authReducer } from "./auth";
import { register } from "./register";
import { crudMsg } from "./blog/blogsCRUD";
import { comments } from "./comments";
import { commentCRUD } from "./commentCRUD";

export default combineReducers({
  blogs,
  auth: authReducer,
  register,
  crudMsg,
  comments,
  commentCRUD
});
