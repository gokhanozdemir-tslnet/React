"use client";
import { all, call } from "redux-saga/effects";
import { productsSaga } from "./products/product.saga";

export function* rootSaga() {
  console.log("root saga");
  yield all([call(productsSaga)]);
}
