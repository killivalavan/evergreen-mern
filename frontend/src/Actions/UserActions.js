import axios from "axios";
import { dispatch } from "redux";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    // Store in local Storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: "Invalid email or password",
    });
    console.log(err);
  }
};

// USer Logout
export const logout = () => async (dispatch) => {
  // REmove from local storage
  localStorage.removeItem("userInfo");

  dispatch({
    type: "USER_LOGOUT",
  });
};
