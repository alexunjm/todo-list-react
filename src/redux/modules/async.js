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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 422) {
          return res.json();
        }
        if (res.status === 401) {
          return {errors: {action: 'no authorized'}}
        }
        console.log("http response no controlled", res);
        return Promise.reject();
      })
      .then((body) => {
        if (body.errors) {
          const errors = Object.keys(body.errors).map(
            (key) => key + " " + body.errors[key]
          );
          dispatch(errorFn(errors.join("; ")));
        } else {
          dispatch(successFn(body));
        }
        return body;
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(errorFn("Unavailable server connection"));
      });
  };
};
