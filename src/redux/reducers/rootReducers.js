import { combineReducers } from "redux";
import search from "./SearchReducers";

const rootReducers = combineReducers({
  search,
});

export default rootReducers;
