import { CARD_ACTION_TYPES } from "./card.types";

const INITIAL_STATE = {
  cartItems: [],
};

export const cardReducer = (state = INITIAL_STATE, action) => {
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
