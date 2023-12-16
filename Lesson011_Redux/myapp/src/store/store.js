import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


//root Reducer conbines sub reducers

const middleWares = [logger];

const composeEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnchancers);
