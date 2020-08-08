import actionCreator from "./taskActions/taskActionCreator";
import { asyncFn } from "../async";
import api from "../../../shared/api";

const {
  apiPending,
  apiSuccessList,
  apiSuccessSave,
  apiError,
} = actionCreator;

const requests = {
  queryTasks: () => {
    return asyncFn({
      promiseToWait: api.task.listTasks(),
      pendingFn: actionCreator.apiPending,
      successFn: actionCreator.apiSuccessList,
      errorFn: actionCreator.apiError,
    });
  },
  add: (task) => {
    return asyncFn({
      promiseToWait: api.task.saveTasks(task),
      pendingFn: actionCreator.apiPending,
      successFn: actionCreator.apiSuccessSave,
      errorFn: actionCreator.apiError,
    });
  },
};

export default requests