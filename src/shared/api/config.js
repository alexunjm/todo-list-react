const buildHeaders = (customHeaders) => {
  var myHeaders = new Headers();
  for (const name in customHeaders) {
    if (customHeaders.hasOwnProperty(name)) {
      const value = customHeaders[name];

      myHeaders.append(name, value);
    }
  }
  return myHeaders;
};
/* 
const headersSample = {
  Authorization:
    "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTEzODMxMDIyZGVhNTcwMGExNTg3ZCIsIm5pY2tuYW1lIjoiYWxleHVuam0iLCJleHAiOjE2MDAxOTYxOTYsImlhdCI6MTU5NTAxMjE5Nn0.Fqn_ivYbArZIiCf7Jn66C9U5u3V4GC2rLb608Gf8CfY",
}; */

export const buildRequestOptions = ({
  method = "GET",
  raw = null,
  customHeaders = {/* ...headersSample */},
}) => {
  var myHeaders = buildHeaders(customHeaders);

  var requestOptions = {
    method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return requestOptions;
};

export const uriBase = "http://localhost/api";
