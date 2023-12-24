import { combineReducers } from "redux";
import { cardReducer } from "./card/card.reducer";
import { productReducer } from "./product/product.reducer";

//conbineReducer  create a Bigger Reducer that contains sub reducers

export const rootReducer = combineReducers({
  card: cardReducer,
  product: productReducer,
});
