import { combineReducers } from "redux";
import { blogs } from "./blog/blogs";
import { detailedBlog } from "./blog/detailedBlog";
import { authReducer } from "./auth";
import { register } from "./register";
import { crudMsg } from "./blogsCRUD";
import { commentCRUD } from "./commentCRUD";

export default combineReducers({
  blogs,
  auth: authReducer,
  register,
  crudMsg,
  commentCRUD,
  detailedBlog
});
