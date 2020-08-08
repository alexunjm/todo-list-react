import { uriBase, buildRequestOptions } from "./config";

export default {
  listTasks: () => {
    const url = `${uriBase}/task/all`;
    const requestOptions = buildRequestOptions({
      customHeaders: { "Content-Type": "application/json" },
    });
    return fetch(url, requestOptions);
  },

  saveTask: (task) => {
    const url = `${uriBase}/task/create`;
    const requestOptions = buildRequestOptions({
      method: "POST",
      raw: JSON.stringify({ task }),
      customHeaders: { "Content-Type": "application/json" },
    });
    return fetch(url, requestOptions);
  },

  updateTask: (task) => {
    const url = `${uriBase}/task/update/${task.id}`;
    const requestOptions = buildRequestOptions({
      method: "POST",
      raw: JSON.stringify({ task }),
      customHeaders: { "Content-Type": "application/json" },
    });
    return fetch(url, requestOptions);
  },
};