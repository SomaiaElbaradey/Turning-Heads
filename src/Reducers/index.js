import { combineReducers } from "redux";
import blogs from "./blogs";
import { authReducer } from "./auth";

export default combineReducers({
  blogs,
  auth: authReducer,
});
