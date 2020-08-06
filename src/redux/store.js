import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", {
        action,
        state: store.getState(),
      });
      const result = next(action);
      console.log("[Middleware] Next state", store.getState());
      return result;
    };
  };
};

const middlewares = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
