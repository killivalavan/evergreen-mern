const initState = {
  cartItems: [],
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default CartReducer;
