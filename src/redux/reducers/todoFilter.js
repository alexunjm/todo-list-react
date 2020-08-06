import { todoFilterActionType } from "../actionTypes";
import { TODO_FILTERS } from "../../constants";

const INITIAL_STATE = {
  activeFilter: TODO_FILTERS.ALL
};

const todoFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoFilterActionType.SET_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        activeFilter: filter
      };
    }
    default: {
      return state;
    }
  }
};

export default todoFilter;
