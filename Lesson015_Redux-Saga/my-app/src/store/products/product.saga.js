import { takeLatest, all, call, put } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailed } from "./product.action";
import { PRODUCTS_ACTION_TYPES } from "./product.types";


export function*  fetchProductsAsync(){
  try {
    console.log("fetchProductsAsync");
    const response = yield call(fetch("https://api.escuelajs.co/api/v1/products"));
    const json =  response.json();
      yield put(fetchProductsSuccess(json));
  } catch (error) {
      yield put(fetchProductsFailed(error));
    console.log("error", error);
  }  
  return products;
};

export function* onFetchProducts() {
    yield takeLatest(
        PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
        fetchProductsAsync 
    ) 
}

export function* productsSaga() {
    yield all([call(onFetchProducts )]);
}