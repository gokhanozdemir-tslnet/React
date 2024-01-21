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

console.log(rootReducer);

const middlewares = [process.env.node_env === "development" && logger].filter(
  Boolean
);
const composedEnhancers = compose;

const composedenhancers = composedEnhancers(applyMiddleware(...middlewares));

const store = configureStore({
  reducer: rootReducer,
  // enhancers: composedenhancers,
});
export default store;
