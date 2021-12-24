import { authActionTypes } from "../actionTypes/authActionTypes";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGNUP_SUCCESS:
      return action.payload;
    case authActionTypes.LOGIN_SUCCESS:
      return action.payload;
    case authActionTypes.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
