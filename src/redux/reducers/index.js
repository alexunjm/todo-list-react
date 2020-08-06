import { combineReducers } from "redux";

import todo from "./todo";
import todoFilter from "./todoFilter";

export default combineReducers({ todo, todoFilter });
