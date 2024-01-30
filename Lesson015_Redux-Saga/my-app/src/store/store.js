"use client";
// import {
//   compose,
//   createstore,
//   configurestore,
//   applymiddleware,
// } from "@reduxjs/toolkit";
// import { rootreducer } from "./root-reducer";
// import { logger } from "redux-logger";

// const middlewares = [];
// // [process.env.node_env === "development" && logger].filter(
// //   Boolean
// // );
// const composeenhancer = compose;

// const composedenhancers = composeenhancer(applymiddleware(...middlewares));

// export const store = configurestore(rootreducer, undefined, composedenhancers);

// export const store = configurestore({
//   reducer: {}, // add your reducers here
// });

import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { createslice } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

console.log("*******store.js********");
console.log(rootReducer);
console.log("*******end of store.js********");

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
//   [process.env.node_env === "development" && logger].filter(
//   Boolean
// );
// const composedEnhancers = compose;

// const composedenhancers = composedEnhancers(applyMiddleware(...middlewares));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
export default store;

sagaMiddleware.run(rootSaga);
