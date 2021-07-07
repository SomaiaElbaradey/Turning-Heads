import { combineReducers } from "redux";
import { blogs } from "./blog/blogs";
import { myBlogs } from "./blog/myBlogs";
import { authReducer } from "./user/auth";
import { register } from "./register";
import { crudMsg } from "./blog/blogsCRUD";
import { comments } from "./comments";
import { commentCRUD } from "./commentCRUD";
import { oneComment } from "./oneComment";
import { user } from "./user/user";
import { isFollowed } from "./user/isFollowed";
import { followMsg } from './user/followMsg';

export default combineReducers({
  blogs,
  auth: authReducer,
  register,
  crudMsg,
  oneComment,
  comments,
  commentCRUD,
  myBlogs,
  user,
  isFollowed,
  followMsg
});
