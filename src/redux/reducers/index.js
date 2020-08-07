import { combineReducers } from "redux";

import todo from "./todoReducer";
import todoFilter from "./todoFilterReducer";
import auth from "./authReducer";

export default combineReducers({ todo, todoFilter, auth });
