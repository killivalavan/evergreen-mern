// Store in local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Init state
const initState = {
  userInfo: userInfoFromStorage,
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {};
    default:
      return { ...state };
  }
};
