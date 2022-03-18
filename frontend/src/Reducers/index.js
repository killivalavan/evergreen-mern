import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { userReducer } from "./UserReducer";

const allReducers = combineReducers({
  Product: productReducer,
  Cart: CartReducer,
  UserLogin: userReducer,
});

export default allReducers;
