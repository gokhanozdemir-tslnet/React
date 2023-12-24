import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//root Reducer conbines sub reducers

//middlware
const myMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("****************Store Reducer*****************");
  console.log("store:action type=", action.type);
  console.log("store:payload=", action.payload);
  console.log("currentState in store=", store.getState());
    console.log("****************end of Store Reducer*****************");
    
    next(action);
};

const middleWares = [logger, myMiddleware];

const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnchancers);
