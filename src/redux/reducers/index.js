import { combineReducers } from "redux";

import todo from "./todoReducer";
import todoFilter from "./todoFilterReducer";

export default combineReducers({ todo, todoFilter });
