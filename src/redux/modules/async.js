const defaultPromise = Promise.resolve({
  ok: false,
  error: "no fetchPromise received to wait",
});
const defaultFn = console.log;

export const asyncFn = ({
  promiseToWait = defaultPromise,
  pendingFn = defaultFn.bind("mock pendingFn"),
  successFn = defaultFn.bind("mock successFn"),
  errorFn = defaultFn.bind("mock errorFn"),
}) => {
  return (dispatch) => {
    dispatch(pendingFn());
    promiseToWait
    .then((httpResponse) => {
      return httpResponse.json();
    })
    .then((body) => {
      if (body.errors) {
        const errors = Object.keys(body.errors).map(key => key + ' ' + body.errors[key]);
        dispatch(errorFn(errors.join('; ')));
      } else {
        dispatch(successFn(body));
      }
      return body;
    })
    .catch((error) => {
      dispatch(errorFn("Unavailable server connection"));
    });
  };
};
