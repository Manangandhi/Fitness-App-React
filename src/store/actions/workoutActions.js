import { workoutActionTypes } from "../actionTypes/workoutActionTypes";

// List
export const workoutListRequest = () => {
  return {
    type: workoutActionTypes.WORKOUT_LIST_REQUEST,
  };
};

export const workoutListSuccess = (payload) => {
  return {
    type: workoutActionTypes.WORKOUT_LIST_SUCCESS,
    payload,
  };
};

export const workoutListFailure = (payload) => {
  return {
    type: workoutActionTypes.WORKOUT_LIST_FAILURE,
    payload,
  };
};

// Add
export const addWorkoutRequest = () => {
  return {
    type: workoutActionTypes.ADD_WORKOUT_REQUEST,
  };
};

export const addWorkoutListSuccess = (payload) => {
  return {
    type: workoutActionTypes.ADD_WORKOUT_SUCCESS,
    payload,
  };
};

export const addWorkoutFailure = (payload) => {
  return {
    type: workoutActionTypes.ADD_WORKOUT_FAILURE,
    payload,
  };
};
