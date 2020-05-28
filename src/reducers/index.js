import { combineReducers } from "redux";
import postReduser from "./postReduser";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReduser,
  users: usersReducer
});