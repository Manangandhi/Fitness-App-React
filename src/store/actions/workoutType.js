import { workoutType } from "../actionTypes/workoutType";

// lIst
export const workoutTypeListRequest = () => {
  return {
    type: workoutType.WORKOUT_TYPE_LIST_REQUEST,
  };
};

export const workoutTypeListSuccess = (payload) => {
  return {
    type: workoutType.WORKOUT_TYPE_LIST_SUCCESS,
    payload,
  };
};

export const workoutTypeListFailure = (payload) => {
  return {
    type: workoutType.WORKOUT_TYPE_LIST_FAILURE,
    payload,
  };
};

// Create
export const addWorkoutTypeRequest = () => {
  return {
    type: workoutType.ADD_WORKOUT_TYPE_REQUEST,
  };
};

export const addWorkoutTypeSuccess = (payload) => {
  return {
    type: workoutType.ADD_WORKOUT_TYPE_SUCCESS,
    payload,
  };
};

export const addWorkoutTypeFailure = (payload) => {
  return {
    type: workoutType.ADD_WORKOUT_TYPE_FAILURE,
    payload,
  };
};

// Delete
export const deleteWorkoutTypeRequest = () => {
  return {
    type: workoutType.DELETE_WORKOUT_TYPE_REQUEST,
  };
};

export const deleteWorkoutTypeSuccess = (payload) => {
  return {
    type: workoutType.DELETE_WORKOUT_TYPE_SUCCESS,
    payload,
  };
};

export const deleteWorkoutTypeFailure = (payload) => {
  return {
    type: workoutType.DELETE_WORKOUT_TYPE_FAILURE,
    payload,
  };
};

// Update
export const updateWorkoutTypeRequest = () => {
  return {
    type: workoutType.UPDATE_WORKOUT_TYPE_REQUEST,
  };
};

export const updateWorkoutTypeSuccess = (payload) => {
  return {
    type: workoutType.UPDATE_WORKOUT_TYPE_SUCCESS,
    payload,
  };
};

export const updateWorkoutTypeFailure = (payload) => {
  return {
    type: workoutType.UPDATE_WORKOUT_TYPE_FAILURE,
    payload,
  };
};
