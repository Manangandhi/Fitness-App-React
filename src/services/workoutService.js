import axios from "axios";
import { toast } from "react-toastify";
import {
  addWorkoutFailure,
  addWorkoutListSuccess,
  addWorkoutRequest,
  deleteWorkoutFailure,
  deleteWorkoutRequest,
  deleteWorkoutSuccess,
  workoutListFailure,
  workoutListRequest,
  workoutListSuccess,
} from "../store/actions/workoutActions";

class WorkoutService {
  // List
  static workoutList = () => {
    return (dispatch) => {
      dispatch(workoutListRequest());
      axios
        .post(`${process.env.REACT_APP_API_URL}/workout/list`, "")
        .then((res) => {
          dispatch(workoutListSuccess(res.data));
        })
        .catch((error) => {
          dispatch(workoutListFailure(error));
        });
    };
  };

  // Create
  static createWorkout = (data) => {
    return (dispatch) => {
      dispatch(addWorkoutRequest());
      axios
        .post(`${process.env.REACT_APP_API_URL}/workout/create`, data)
        .then((res) => {
          // console.log("response", res);
          dispatch(addWorkoutListSuccess(res.data));
          toast.success("Workout created successfully");
        })
        .catch((error) => {
          dispatch(addWorkoutFailure(error));
          toast.error("Error creating workout");
        });
    };
  };

  // Delete
  static deleteWorkout = (id) => {
    return (dispatch) => {
      dispatch(deleteWorkoutRequest());
      axios
        .delete(`${process.env.REACT_APP_API_URL}/workout/delete`, {
          data: {
            _id: id,
          },
        })
        .then((res) => {
          dispatch(deleteWorkoutSuccess(id));
          toast.success("Workout deleted successfully");
        })
        .catch((error) => {
          dispatch(deleteWorkoutFailure(error));
          toast.error("Error deleted workout");
        });
    };
  };
}

export default WorkoutService;
