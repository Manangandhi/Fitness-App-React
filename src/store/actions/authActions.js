import { authActionTypes } from "../actionTypes/authActionTypes";

// SignUp
export const signupSuccess = (payload) => {
  return {
    type: authActionTypes.SIGNUP_SUCCESS,
    payload,
  };
};

// Login
export const loginSuccess = (payload) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload,
  };
};

// Logout
export const logoutSuccess = (payload) => ({
  type: authActionTypes.LOGOUT_SUCCESS,
  payload,
});
