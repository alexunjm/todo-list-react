import { login, signUp } from "./auth/fn";
import { todoActionCreators, authActionCreators } from "../actionCreators";
import { lsManager } from "../../lsManager";

/***************************************************************
 * Tasks
 * *************************************************************
 */

/***
 * Fetch Tasks from server
 * *************************************************************
 */

const {
  fetchTasksPending,
  fetchTasksSuccess,
  fetchTasksError,
} = todoActionCreators;

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksPending());
    fetch("http://localhost/api/task/sample")
      .then((res) => {
        if (res.ok) return res.json();
        return { error: "Unavailable server connection" };
      })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTasksSuccess(res.tasks));
        
        return res.tasks;
      })
      .catch((error) => {
        dispatch(fetchTasksError(error));
      });
  };
};

/***************************************************************
 * Auth (login and signUp)
 * *************************************************************
 */

 /***
  * Login on server
  */
const {
  fetchAuthPending,
  fetchLoginSuccess,
  fetchSingUpSuccess,
  fetchAuthError,
} = authActionCreators;

export const loginFetch = (user) => {
  return (dispatch) => {
    dispatch(fetchAuthPending());
    login(user)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.errors) {
          const errors = Object.keys(res.errors).map(key => key + ' ' + res.errors[key]);
          dispatch(fetchAuthError(errors.join('; ')));
        } else {
          dispatch(fetchLoginSuccess(res.user));
        }
        lsManager.set('user', res.user);
        return res.user;
      })
      .catch((error) => {
        dispatch(fetchAuthError("Unavailable server connection"));
      });
  };
};

/***
 * SignUp on server
 */
export const signUpFetch = (user) => {
  return (dispatch) => {
    dispatch(fetchAuthPending());
    signUp(user)
      .then((res) => {
        if (res.ok) return res.json();
        return { error: "Unavailable server connection" };
      })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchSingUpSuccess(res.user));
        lsManager.set('user', res.user);
        return res.user;
      })
      .catch((error) => {
        dispatch(fetchAuthError(error));
      });
  };
};
