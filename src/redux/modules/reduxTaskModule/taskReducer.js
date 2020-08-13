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
    case actionType.API.PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case actionType.API.SUCCESS.LIST: {
      const {data} = action.payload;
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          ...data.reduce(
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
      const { data } = action.payload;
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          [data.id]: {
            ...data,
          },
        },
      };
    }
    case actionType.API.SUCCESS.UPDATE: {
      const { data } = action.payload;
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          [data.id]: {
            ...data,
          },
        },
      };
    }
    case actionType.API.SUCCESS.DELETE: {
      const { data } = action.payload;
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          [data.id]: {
            ...data,
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
