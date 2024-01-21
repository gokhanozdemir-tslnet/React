import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const addProductToItems = (item) => {
  return createAction(PRODUCT_ACTION_TYPES.ADD_PRODUCT_ITEM, item);
};
