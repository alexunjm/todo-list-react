import { todoActionType } from "./actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const INITIAL_STATE = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionType.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
