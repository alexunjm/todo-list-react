import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// import { logger } from "./middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareArr = [/* logger,  */thunk];

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewareArr))
);
