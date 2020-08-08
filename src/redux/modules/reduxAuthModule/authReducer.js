import actionType from "./authActions/authActionTypes";
import { lsManager } from "../../../shared/storage";

const checkCurrentUser = () => lsManager.get('user');

const INITIAL_STATE = {
  user: checkCurrentUser(),
  showSignup: false,
  pending: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.STATE.TOGGLE.SHOW_SIGNUP: {
      return {
        ...state,
        error: null,
        pending: true,
        showSignup: !state.showSignup
      };
    }
    case actionType.API.PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case actionType.API.SUCCESS.LOGIN: {
      const user = action.payload;
      return {
        ...state,
        pending: false,
        user,
      };
    }
    case actionType.API.SUCCESS.SIGNUP: {
      const user = action.payload;
      return {
        ...state,
        pending: false,
        user,
      };
    }
    case actionType.API.ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
