import actionTypes from "./taskActionTypes";

export default {
  setFilter: (filter) => ({
    type: actionTypes.STATE.SET_FILTER,
    filter,
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
