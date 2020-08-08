import actionTypes from "./authActionTypes";

export const toggleShowSignup = () => ({
  type: actionTypes.STATE.TOGGLE.SHOW_SIGNUP,
});

export const apiPending = () => ({
  type: actionTypes.API.PENDING,
});

export const apiSuccessLogin = (payload) => ({
  type: actionTypes.API.SUCCESS.LOGIN,
  payload,
});

export const apiSuccessSingUp = (payload) => ({
  type: actionTypes.API.SUCCESS.SIGNUP,
  payload,
});

export const apiError = (error) => ({
  type: actionTypes.API.ERROR,
  error,
});
