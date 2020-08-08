import { combineReducers } from "redux";

import auth from "./modules/reduxAuthModule/authReducer";
import task from "./modules/reduxTaskModule/taskReducer";

export default combineReducers({ task, auth });
