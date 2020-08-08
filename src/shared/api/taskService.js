import { uriBase, buildRequestOptions } from "./config";

export default {
  listTasks: () => {
    const url = `${uriBase}/task/sample`;
    const requestOptions = buildRequestOptions({
      customHeaders: { "Content-Type": "application/json" },
    });
    return fetch(url, requestOptions);
  },

  saveTasks: (task) => {
    const url = `${uriBase}/task/create`;
    const requestOptions = buildRequestOptions({
      method: "POST",
      raw: JSON.stringify({ task }),
      customHeaders: { "Content-Type": "application/json" },
    });
    return fetch(url, requestOptions);
  },
};

/***
 * Examples
 *
 *
const getSample = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTEzODMxMDIyZGVhNTcwMGExNTg3ZCIsIm5pY2tuYW1lIjoiYWxleHVuam0iLCJleHAiOjE2MDAxOTYxOTYsImlhdCI6MTU5NTAxMjE5Nn0.Fqn_ivYbArZIiCf7Jn66C9U5u3V4GC2rLb608Gf8CfY"
  );

  var raw = "";

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/user", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const postSample = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ user: { password: "ud3p", nickname: "udep" } });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/api/user/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

 *
 *
 */
