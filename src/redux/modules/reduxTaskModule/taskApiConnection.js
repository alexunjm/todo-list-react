import taskActionCreators from "./taskActions/taskActionCreator";
import { asyncFn } from "../async";
import api from "../../../shared/api";

const {
  apiPending,
  apiSuccessList,
  apiError,
} = taskActionCreators;

export const queryTasks = () => {
  return asyncFn({
    promiseToWait: api.taskService.listTasks(),
    pendingFn: apiPending,
    successFn: apiSuccessList,
    errorFn: apiError,
  })
};