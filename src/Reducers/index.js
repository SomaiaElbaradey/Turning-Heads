import { combineReducers } from "redux";
import blogs from "./blogs";
import { authReducer } from "./auth";
import register from './register';
import crudMsg from './blogsCRUD';

export default combineReducers({
  blogs,
  auth: authReducer,
  register,
  crudMsg
});
