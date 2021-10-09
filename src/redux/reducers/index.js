import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

const reducers = combineReducers({
  allReducers: productReducers,
});

export default reducers;
