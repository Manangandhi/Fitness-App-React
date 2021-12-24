import { combineReducers } from "redux";

import { authReducer } from "./reducers/authReducer";
import { sidebarReducer } from "./reducers/sidebarReducer";

const appReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
