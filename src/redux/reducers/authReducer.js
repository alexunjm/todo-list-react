import { authActionType } from "../actionTypes";
import { lsManager } from "../../lsManager";

const checkCurrentUser = () => {
  return lsManager.get('user');
}

const INITIAL_STATE = {
  user: checkCurrentUser(),
  showSignup: false,
  pending: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case authActionType.TOGGLE_SIGNUP: {
      return {
        ...state,
        error: null,
        pending: true,
        showSignup: !state.showSignup
      };
    }
    case authActionType.FETCH_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }
    case authActionType.FETCH_LOGIN_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        pending: false,
        user,
      };
    }
    case authActionType.FETCH_SIGNUP_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        pending: false,
        user,
      };
    }
    case authActionType.FETCH_ERROR: {
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
