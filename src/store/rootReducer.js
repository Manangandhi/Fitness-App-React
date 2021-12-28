import { combineReducers } from "redux";

import { authReducer } from "./reducers/authReducer";
import { selectedWorkoutReducer } from "./reducers/selectedWorkouts";
import { sidebarReducer } from "./reducers/sidebarReducer";

const appReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  workout: selectedWorkoutReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
