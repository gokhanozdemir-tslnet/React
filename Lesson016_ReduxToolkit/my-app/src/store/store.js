"use client";
// import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
// import { createslice } from "@reduxjs/toolkit";
// import { rootReducer } from "./root-reducer";
// import { logger } from "redux-logger";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

// console.log("*******store.js********");
// console.log(rootReducer);
// console.log("*******end of store.js********");

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger, sagaMiddleware];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middlewares),
// });
// export default store;

// sagaMiddleware.run(rootSaga);
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export default store;
