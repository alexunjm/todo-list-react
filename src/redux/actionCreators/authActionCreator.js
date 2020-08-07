import { authActionType } from "../actionTypes";

export const toggleSignup = () => {
  return {
    type: authActionType.TOGGLE_SIGNUP,
  };
};

export const fetchAuthPending = () => {
  return {
    type: authActionType.FETCH_PENDING,
  };
};

export const fetchLoginSuccess = (payload) => {
  return {
    type: authActionType.FETCH_LOGIN_SUCCESS,
    payload,
  };
};

export const fetchSingUpSuccess = (payload) => {
  return {
    type: authActionType.FETCH_SIGNUP_SUCCESS,
    payload,
  };
};

export const fetchAuthError = (error) => {
  return {
    type: authActionType.FETCH_ERROR,
    error,
  };
};
