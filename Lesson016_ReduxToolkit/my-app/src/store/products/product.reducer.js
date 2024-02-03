"use client";
import { useState } from "react";
// import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    fetchProductsStart1(state, action) {
      // console.log("********productsSlice");
      // console.log(state.products);
      // console.log(action);
      // console.log(action.payload);
      // console.log("********productsSlice");
      state.products = action.payload;
    },
  },
});

// console.log("*********************")
// console.log(productsSlice.reducer);

export const { fetchProductsStart1 } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

// export const productsReducerOld = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;
//   switch (type) {
//     case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
//       return { ...state, isLoading: true };
//     case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
//       return { ...state, isLoading: false, products: payload };
//     case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
//       return { ...state, isLoading: false, error: payload };
//     default:
//       return state;
//   }
// };
