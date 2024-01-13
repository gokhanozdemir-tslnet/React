import { createAction } from "../../utils/reducer/reducer.utils";
import { CARD_ACTION_TYPES } from "./card.types";

export const addCardToItems = (item) => {
  return createAction(CARD_ACTION_TYPES.ADD_CARD_ITEM, item);
};
