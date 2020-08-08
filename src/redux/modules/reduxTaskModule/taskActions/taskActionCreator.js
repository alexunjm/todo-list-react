import actionTypes from './taskActionTypes';

export const setFilter = (filter) => ({
  type: actionTypes.STATE.SET_FILTER,
  filter,
});

export const toggleComplete = (id) => ({
  type: actionTypes.STATE.TOGGLE.COMPLETE,
  payload: { id },
});

export const apiPending = () => {
  return {
    type: actionTypes.API.PENDING,
  };
};

export const apiSuccessList = (payload) => {
  return {
    type: actionTypes.API.SUCCESS.LIST,
    payload,
  };
};

export const apiSuccessSave = (payload) => {
  return {
    type: actionTypes.API.SUCCESS.SAVE,
    payload,
  };
};

export const apiSuccessUpdate = (payload) => {
  return {
    type: actionTypes.API.SUCCESS.UPDATE,
    payload,
  };
};

export const apiSuccessDelete = (payload) => {
  return {
    type: actionTypes.API.SUCCESS.DELETE,
    payload,
  };
};

export const apiError = (error) => {
  return {
    type: actionTypes.API.ERROR,
    error,
  };
};
