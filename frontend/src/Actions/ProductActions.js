import axios from "axios";
// import { product } from "../api";

export const fetchProducts = () => async (dispatch) => {
  const getProduct = await axios.get("http://localhost:3001/api/products/");
  dispatch({
    type: "GET_PRODUCTS",
    payload: {
      products: getProduct.data,
    },
  });
};
