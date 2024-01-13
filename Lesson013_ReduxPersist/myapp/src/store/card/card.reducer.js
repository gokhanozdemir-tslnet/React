import { CARD_ACTION_TYPES } from "./card.types";
import { createSelector } from "@reduxjs/toolkit";

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

//reselect
const memoizedSelectCompletedTodos = createSelector(
  [(state) => state.cartItems],
  async (cartItems) => {
    console.log("memoized selector ran");
    return await fetchData;
  }
);

const INITIAL_STATE = {
  cartItems: await fetchData(),
};

export const cardReducer = (state = INITIAL_STATE, action) => {
  // console.log(memoizedSelectCompletedTodos(state));
  const { type, payload } = action;
  console.log("---cardReducer------");
  console.log("type:", type);
  console.log("payload:", payload);
  console.log("state:", state);
  console.log("---end of cardReducer------");
  //x = [...x, newCardToAdd];
  switch (type) {
    case CARD_ACTION_TYPES.ADD_CARD_ITEM:
      return { ...state, cartItems: [...state.cartItems, payload] };
    default:
      return state;
  }
};
