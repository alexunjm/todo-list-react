import authActionCreators from "./authActions/authActionCreator";
import { asyncFn } from "../async";
import api from "../../../shared/api";

const {
  apiPending,
  apiSuccessLogin,
  apiSuccessSingUp,
  apiError,
} = authActionCreators;

export default {
  login: (user) => {
    return asyncFn({
      promiseToWait: api.authService.login(user),
      pendingFn: apiPending,
      successFn: apiSuccessLogin,
      errorFn: apiError,
    });
  },

  signUp: (user) => {
    return asyncFn({
      promiseToWait: api.authService.signUp(user),
      pendingFn: apiPending,
      successFn: apiSuccessSingUp,
      errorFn: apiError,
    });
  },
};
