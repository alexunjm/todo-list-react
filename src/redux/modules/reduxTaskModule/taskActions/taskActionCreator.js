import actionTypes from "./taskActionTypes";

const actionCreators = {
  setFilter: (filter) => ({
    type: actionTypes.STATE.SET_FILTER,
    filter,
  }),

  toggleComplete: (id) => ({
    type: actionTypes.STATE.TOGGLE.COMPLETE,
    payload: { id },
  }),

  apiPending: () => {
    return {
      type: actionTypes.API.PENDING,
    };
  },

  apiSuccessList: (payload) => {
    return {
      type: actionTypes.API.SUCCESS.LIST,
      payload,
    };
  },

  apiSuccessSave: (payload) => {
    return {
      type: actionTypes.API.SUCCESS.SAVE,
      payload,
    };
  },

  apiSuccessUpdate: (payload) => {
    return {
      type: actionTypes.API.SUCCESS.UPDATE,
      payload,
    };
  },

  apiSuccessDelete: (payload) => {
    return {
      type: actionTypes.API.SUCCESS.DELETE,
      payload,
    };
  },

  apiError: (error) => {
    return {
      type: actionTypes.API.ERROR,
      error,
    };
  },
};

export default actionCreators;
