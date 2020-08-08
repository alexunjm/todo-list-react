import actionType from "./taskActions/taskActionTypes";
import taskFilters from "./taskConstantFilter";

const INITIAL_STATE = {
  data: {},
  pending: false,
  error: null,
  activeFilter: taskFilters.ALL
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionType.STATE.SET_FILTER: {
      return {
        ...state,
        activeFilter: action.filter
      };
    }
    case actionType.STATE.TOGGLE.COMPLETE: {
      const { id } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            completed: !state.data[id].completed,
          },
        },
      };
    }
    case actionType.API.PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case actionType.API.SUCCESS.LIST: {
      const tasks = action.payload;
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          ...tasks.reduce(
            (acc, task) => ({
              ...acc,
              [task.id]: task,
            }),
            {}
          ),
        },
      };
    }
    case actionType.API.SUCCESS.SAVE: {
      const { id } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
          },
        },
      };
    }
    case actionType.API.SUCCESS.UPDATE: {
      const { id } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
          },
        },
      };
    }
    case actionType.API.SUCCESS.DELETE: {
      const { id } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
          },
        },
      };
    }
    case actionType.API.ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
