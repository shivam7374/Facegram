import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import combineReducers from "../reducers";

let store;

export function configStore() {
  store = createStore(combineReducers, applyMiddleware(thunk, logger));
  return store;
}
