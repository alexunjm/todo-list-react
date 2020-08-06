import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", {action, state: store.getState()});
      const result = next(action);
      console.log("[Middleware] Next state", store.getState());
      return result;
    };
  };
};

export default createStore(rootReducer, applyMiddleware(logger));
