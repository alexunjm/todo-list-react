import { todoFilterActionType } from "../actionTypes";

export const setFilter = (filter) => ({
  type: todoFilterActionType.SET_FILTER,
  payload: { filter },
});
