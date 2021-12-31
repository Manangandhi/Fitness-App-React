import { workoutActionTypes } from "../actionTypes/workoutActionTypes";

const initialState = {
  workouts: [],
  loading: false,
  error: "",
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case workoutActionTypes.WORKOUT_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case workoutActionTypes.WORKOUT_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        workouts: action.payload,
        error: "",
      };
    }
    case workoutActionTypes.WORKOUT_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        // workouts: action.payload,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
