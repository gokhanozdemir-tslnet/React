"use client";
import { useState } from "react";
import { PRODUCTS_ACTION_TYPES } from "./product.types";
import SeedProduct from "./product.seed";

const fetchData = async () => {
  let products = [];
  try {
    console.log("fetchinf data");
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await response.json();
    products = await json;
  } catch (error) {
    console.log("error", error);
  }
  return products;
};

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  products: [],
};

const getData = (state) => {
  console.log("------start getData*******");

  return { ...state, isLoading: true, products: SeedProduct };
};

export const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  console.log("------start reducer*******");
  // getData();

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return getData(state);
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
