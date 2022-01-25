import { workoutActionTypes } from "../actionTypes/workoutActionTypes";
import { cloneDeep } from "lodash";

const initialState = {
  workouts: [],
  loading: false,
  error: "",
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    // List
    case workoutActionTypes.WORKOUT_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case workoutActionTypes.WORKOUT_LIST_SUCCESS: {
      // console.log("payload", action.payload);
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

    // Add
    case workoutActionTypes.ADD_WORKOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case workoutActionTypes.ADD_WORKOUT_SUCCESS: {
      // console.log("payload", action.payload);
      return {
        ...state,
        loading: false,
        workouts: [...state.workouts, action.payload],
        error: "",
      };
    }
    case workoutActionTypes.ADD_WORKOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    // Update
    case workoutActionTypes.UPDATE_WORKOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case workoutActionTypes.UPDATE_WORKOUT_SUCCESS: {
      // console.log("payload", action.payload);
      return {
        ...state,
        loading: false,
        // workouts: [...state.workouts, action.payload],
        error: "",
      };
    }
    case workoutActionTypes.UPDATE_WORKOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    // Delete
    case workoutActionTypes.DELETE_WORKOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case workoutActionTypes.DELETE_WORKOUT_SUCCESS: {
      let payload = action.payload;
      let workoutState = cloneDeep(state?.workouts || []);
      let filteredWorkout = workoutState?.filter((wk) => wk._id !== payload);
      return {
        ...state,
        loading: false,
        workouts: filteredWorkout,
        error: "",
      };
    }
    case workoutActionTypes.DELETE_WORKOUT_FAILURE: {
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
