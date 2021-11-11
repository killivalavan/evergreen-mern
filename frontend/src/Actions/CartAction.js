import axios from "axios";

export const fetchCartItems = (id, qty) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInSTock: data.countInSTock,
      qty,
    },
  });
};

export const deleteItem = (id) => async (dispatch) => {
  dispatch({
    type: "DELETE_ITEM",
    payload: id,
  });
};
