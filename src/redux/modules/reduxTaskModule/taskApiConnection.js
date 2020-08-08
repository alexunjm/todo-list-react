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
      promiseToWait: api.task.saveTask(task),
      pendingFn: apiPending,
      successFn: apiSuccessSave,
      errorFn: apiError,
    });
  },

  toggleComplete: (task) => {
    return asyncFn({
      promiseToWait: api.task.updateTask({id: task.id, completed: !task.completed}),
      pendingFn: apiPending,
      successFn: apiSuccessSave,
      errorFn: apiError,
    });
  },
};

export default requests;
