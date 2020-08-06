import { todoActionType } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const INITIAL_STATE = {
  activeFilter: VISIBILITY_FILTERS.ALL
};

const visibilityFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionType.SET_FILTER: {
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

export default visibilityFilter;
