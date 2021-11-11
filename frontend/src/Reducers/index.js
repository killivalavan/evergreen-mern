import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

const allReducers = combineReducers({
  Product: productReducer,
  Cart: CartReducer,
});

export default allReducers;
