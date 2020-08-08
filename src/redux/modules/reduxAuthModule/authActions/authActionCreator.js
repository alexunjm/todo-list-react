import actionTypes from "./authActionTypes";

export default {
  toggleShowSignup: () => ({
    type: actionTypes.STATE.TOGGLE.SHOW_SIGNUP,
  }),

  apiPending: () => ({
    type: actionTypes.API.PENDING,
  }),

  apiSuccessLogin: (payload) => ({
    type: actionTypes.API.SUCCESS.LOGIN,
    payload,
  }),

  apiSuccessSingUp: (payload) => ({
    type: actionTypes.API.SUCCESS.SIGNUP,
    payload,
  }),

  apiError: (error) => ({
    type: actionTypes.API.ERROR,
    error,
  }),
};
