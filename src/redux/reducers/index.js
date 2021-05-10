import { combineReducers } from "redux";
import { activeFilter } from "./filter";
import { todos } from "./todos";

export default combineReducers({
  activeFilter,
  todos,
});
