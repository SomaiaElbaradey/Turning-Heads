import { combineReducers } from "redux";
import { register } from "./register";

import { blogs } from "./blog/blogs";
import { myBlogs } from "./blog/myBlogs";
import { crudMsg } from "./blog/blogsCRUD";

import { authReducer } from "./user/auth";
import { followers } from "./user/followers";
import { following } from "./user/following";
import { user } from "./user/user";
import { isFollowed } from "./user/isFollowed";
import { followMsg } from './user/followMsg';

import { comments } from "./comments";
import { commentCRUD } from "./commentCRUD";
import { oneComment } from "./oneComment";


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
  followMsg,
  followers,
  following
});
