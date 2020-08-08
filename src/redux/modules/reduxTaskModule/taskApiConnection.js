import actionCreator from "./taskActions/taskActionCreator";
import { asyncFn } from "../async";
import api from "../../../shared/api";

const { apiPending, apiSuccessList, apiSuccessSave, apiError } = actionCreator;

const requests = {
  queryTasks: () => {
    return asyncFn({
      promiseToWait: api.task.listTasks(),
      pendingFn: apiPending,
      successFn: apiSuccessList,
      errorFn: apiError,
    });
  },

  add: (task) => {
    return asyncFn({
      promiseToWait: api.task.saveTasks(task),
      pendingFn: apiPending,
      successFn: apiSuccessSave,
      errorFn: apiError,
    });
  },
};

export default requests;
