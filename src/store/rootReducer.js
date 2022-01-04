import { combineReducers } from "redux";

import { authReducer } from "./reducers/authReducer";
import { selectedWorkoutReducer } from "./reducers/selectedWorkouts";
import { sidebarReducer } from "./reducers/sidebarReducer";
import { workoutReducer } from "./reducers/workoutReducer";
import { workoutTypeReducer } from "./reducers/workoutTypeReducer";

const appReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  workout: selectedWorkoutReducer,
  workouts: workoutReducer,
  workoutType: workoutTypeReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
