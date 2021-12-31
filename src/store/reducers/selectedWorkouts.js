import { selectedWorkout } from "../actionTypes/selectedWorkouts";

const initialState = {
  workouts: [],
  loading: false,
};

export const selectedWorkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case selectedWorkout.ADD_EXERCISE: {
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      };
    }

    // Updating Exercise
    case selectedWorkout.UPDATE_WORKOUT: {
      const newWorkouts = state.workouts.map((wk) => {
        if (
          wk.workout === action?.payload?.selected?.workout &&
          wk.day === action.payload.selected.day
        ) {
          return {
            ...wk,
            exercises: wk.exercises?.map((ex) => {
              if (ex.exerciseId === action.payload.selected.exercise) {
                return { ...ex, ...action.payload.newInput };
              } else {
                return ex;
              }
            }),
          };
        } else {
          return wk;
        }
      });

      return {
        ...state,
        workouts: newWorkouts,
      };
    }

    // ADD_EXERCISE_TO_WORKOUT
    case selectedWorkout.ADD_EXERCISE_TO_WORKOUT: {
      const addExerciseToArray = state.workouts.map((wk) => {
        if (
          wk.workout === action?.payload?.selected?.workout &&
          wk.day === action.payload.selected.day
        ) {
          return {
            ...wk,
            exercises: [
              ...wk.exercises,
              {
                set: action.payload.newInput.set,
                reps: action.payload.newInput.reps,
                exerciseId: action.payload.selected.exercise,
              },
            ],
          };
        } else {
          return wk;
        }
      });

      return {
        ...state,
        workouts: addExerciseToArray,
      };
    }
    default:
      return state;
  }
};
