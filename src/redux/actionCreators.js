import { todoActionType } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: todoActionType.ADD,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: todoActionType.TOGGLE,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: todoActionType.SET_FILTER,
  payload: { filter },
});
