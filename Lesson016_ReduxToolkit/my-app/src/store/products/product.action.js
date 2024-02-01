"use client";

import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (products) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

// export const fetchProductsSuccessExample = (products) =>
//   ({ PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products });
