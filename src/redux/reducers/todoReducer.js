import { todoActionType } from "../actionTypes";

const INITIAL_STATE = {
  len: 0,
  data: {},
  pending: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case todoActionType.ADD: {
      const id = state.len + 1;
      return {
        ...state,
        len: id,
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
            completed: false,
          },
        },
      };
    }
    case todoActionType.TOGGLE: {
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
    case todoActionType.FETCH_TASKS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case todoActionType.FETCH_TASKS_SUCCESS: {
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
    case todoActionType.FETCH_TASKS_ERROR: {
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
