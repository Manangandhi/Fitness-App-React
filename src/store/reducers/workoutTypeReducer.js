import { cloneDeep } from "lodash";
import { workoutType } from "../actionTypes/workoutType";

const initialState = {
  loading: false,
  types: [],
  error: "",
};

export const workoutTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    // List
    case workoutType.WORKOUT_TYPE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case workoutType.WORKOUT_TYPE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        types: action.payload,
        error: "",
      };
    case workoutType.WORKOUT_TYPE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Create
    case workoutType.ADD_WORKOUT_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case workoutType.ADD_WORKOUT_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        types: [...state.types, action.payload],
        error: "",
      };
    case workoutType.ADD_WORKOUT_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Delete
    case workoutType.DELETE_WORKOUT_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case workoutType.DELETE_WORKOUT_TYPE_SUCCESS:
      const payload = action.payload;
      const typeState = cloneDeep(state?.types || []);
      const filteredWorkoutType = typeState?.filter((tp) => tp._id !== payload);

      return {
        ...state,
        loading: false,
        types: filteredWorkoutType,
        error: "",
      };
    case workoutType.DELETE_WORKOUT_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Update
    case workoutType.UPDATE_WORKOUT_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case workoutType.UPDATE_WORKOUT_TYPE_SUCCESS:
      const Payload = action.payload;
      const types = state.types.map((tp) => {
        if (tp?._id === Payload?._id) {
          return Payload;
        }
        return tp;
      });

      return {
        ...state,
        loading: false,
        types: types,
        error: "",
      };
    case workoutType.UPDATE_WORKOUT_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
