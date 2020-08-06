import { todoActionType } from "../actionTypes";

const INITIAL_STATE = {
  len: 0,
  data: {},
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
    default:
      return state;
  }
}
