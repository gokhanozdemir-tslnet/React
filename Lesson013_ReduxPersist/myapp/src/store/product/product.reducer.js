import { PRODUCT_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
  productItems: [
    {
      id: 1,
      Title: "Title",
      Description: "Product description",
      Price: 10,
      Stock: 10,
    },
  ],
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("---cardReducer------");
  console.log("type:", type);
  console.log("payload:", payload);
  console.log("state:", state);
  console.log("---end of cardReducer------");
  //x = [...x, newCardToAdd];
  switch (type) {
    case PRODUCT_ACTION_TYPES.ADD_PRODUCT_ITEM:
      return { ...state, productItems: [...state.productItems, payload] };
    default:
      return state;
  }
};
