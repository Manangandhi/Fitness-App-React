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

export const addWorkoutSuccess = (payload) => {
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

// Update
export const updateWorkoutRequest = () => {
  return {
    type: workoutActionTypes.UPDATE_WORKOUT_REQUEST,
  };
};

export const updateWorkoutSuccess = (payload) => {
  return {
    type: workoutActionTypes.UPDATE_WORKOUT_SUCCESS,
    payload,
  };
};

export const updateWorkoutFailure = (payload) => {
  return {
    type: workoutActionTypes.UPDATE_WORKOUT_FAILURE,
    payload,
  };
};

// Delete
export const deleteWorkoutRequest = () => {
  return {
    type: workoutActionTypes.DELETE_WORKOUT_REQUEST,
  };
};

export const deleteWorkoutSuccess = (payload) => {
  return {
    type: workoutActionTypes.DELETE_WORKOUT_SUCCESS,
    payload,
  };
};

export const deleteWorkoutFailure = (payload) => {
  return {
    type: workoutActionTypes.DELETE_WORKOUT_FAILURE,
    payload,
  };
};
