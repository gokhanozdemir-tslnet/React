import { takeLatest, all, call, put } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailed } from "./product.action";
import { PRODUCTS_ACTION_TYPES } from "./product.types";
import fetchProductsDataAsync from "@/utils/data/products/fetchProducts";

export function* fetchProductsAsync() {
  try {
    // console.log("****************fetchProductsAsync******************");
    const response = yield call(fetchProductsDataAsync);
    // console.log(response);
    // console.log("****************end of fetchProductsAsync******************");
    // const json = response.json();
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
  // console.log("productsSaga");
  yield all([call(onFetchProducts)]);
}
