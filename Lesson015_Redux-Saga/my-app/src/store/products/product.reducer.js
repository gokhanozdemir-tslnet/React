"use client";
import { PRODUCTS_ACTION_TYPES } from "./product.types";

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
  products: [
    {
      id: 4,
      title: "Handmade Fresh Table",
      price: 687,
      description: "Andy shoes are designed to keeping in...",
      category: {
        id: 5,
        name: "Others",
        image: "https://placeimg.com/640/480/any?r=0.591926261873231",
      },
      images: [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017",
      ],
    },
    {
      id: 5,
      title: "Handmade Fresh Table",
      price: 687,
      description: "Andy shoes are designed to keeping in...",
      category: {
        id: 5,
        name: "Others",
        image: "https://placeimg.com/640/480/any?r=0.591926261873231",
      },
      images: [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017",
      ],
    },
  ],
};

const getData = () => {

}

export const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log(state);

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
