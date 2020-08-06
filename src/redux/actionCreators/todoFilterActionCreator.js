import { todoActionType } from "../actionTypes";

export const setFilter = (filter) => ({
  type: todoActionType.SET_FILTER,
  payload: { filter },
});
