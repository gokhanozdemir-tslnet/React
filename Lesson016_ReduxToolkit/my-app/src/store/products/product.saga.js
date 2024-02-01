import { takeLatest, all, call, put } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailed } from "./product.action";
import { PRODUCTS_ACTION_TYPES } from "./product.types";
import fetchProductsDataAsync from "@/utils/data/products/fetchProducts";

export function* fetchProductsAsync() {
  try {
    const response = yield call(fetchProductsDataAsync);
    yield put(fetchProductsSuccess(response));
  } catch (error) {
    yield put(fetchProductsFailed(error));
    console.log("error", error);
  }
}

export function* onFetchProducts() {
  yield takeLatest(
    PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
