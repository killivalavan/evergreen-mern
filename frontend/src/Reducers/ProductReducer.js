const initState = {
  product: [],
  isLoading: true,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload.products,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
