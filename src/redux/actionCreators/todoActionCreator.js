import { todoActionType } from "../actionTypes";

export const addTodo = (content) => ({
  type: todoActionType.ADD,
  payload: {content},
});

export const toggleTodo = (id) => ({
  type: todoActionType.TOGGLE,
  payload: { id },
});
