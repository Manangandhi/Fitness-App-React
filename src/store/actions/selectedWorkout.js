import { selectedWorkout } from "../actionTypes/selectedWorkouts";

export const addExercise = (payload) => {
  return {
    type: selectedWorkout.ADD_EXERCISE,
    payload,
  };
};

export const updateWorkout = (payload) => {
  return {
    type: selectedWorkout.UPDATE_WORKOUT,
    payload,
  };
};

export const addExerciseToWorkout = (payload) => {
  return {
    type: selectedWorkout.ADD_EXERCISE_TO_WORKOUT,
    payload,
  };
};
