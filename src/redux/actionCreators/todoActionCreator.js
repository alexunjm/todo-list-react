import { todoActionType } from "../actionTypes";

export const addTodo = (content) => ({
  type: todoActionType.ADD,
  payload: {content},
});

export const toggleTodo = (id) => ({
  type: todoActionType.TOGGLE,
  payload: { id },
});

export const fetchTasksPending = () => {
  return {
    type: todoActionType.FETCH_TASKS_PENDING,
  };
};

export const fetchTasksSuccess = (payload) => {
  return {
    type: todoActionType.FETCH_TASKS_SUCCESS,
    payload,
  };
};

export const fetchTasksError = (error) => {
  return {
    type: todoActionType.FETCH_TASKS_ERROR,
    error,
  };
};
