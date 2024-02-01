"use client"
import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products/product.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});
