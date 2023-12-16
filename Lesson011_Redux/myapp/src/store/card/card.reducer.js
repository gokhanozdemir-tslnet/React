import { CARD_ACTION_TYPES } from "./card.types";

const INITIAL_STATE = {
  cartItems: [],
};

export const cardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log(type);
  console.log(payload);
  switch (type) {
    case CARD_ACTION_TYPES.ADD_CARD_ITEM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
