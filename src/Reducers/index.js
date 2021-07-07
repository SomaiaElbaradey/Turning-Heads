import { combineReducers } from "redux";
import { blogs } from "./blog/blogs";
import { myBlogs } from "./blog/myBlogs";
import { authReducer } from "./auth";
import { register } from "./register";
import { crudMsg } from "./blog/blogsCRUD";
import { comments } from "./comments";
import { commentCRUD } from "./commentCRUD";
import { oneComment } from "./oneComment";
import { user } from "./user";

export default combineReducers({
  blogs,
  auth: authReducer,
  register,
  crudMsg,
  oneComment,
  comments,
  commentCRUD,
  myBlogs,
  user
});
