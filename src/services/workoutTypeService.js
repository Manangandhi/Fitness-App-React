import axios from "axios";
import {
  addWorkoutTypeFailure,
  addWorkoutTypeRequest,
  addWorkoutTypeSuccess,
  deleteWorkoutTypeFailure,
  deleteWorkoutTypeRequest,
  deleteWorkoutTypeSuccess,
  updateWorkoutTypeFailure,
  updateWorkoutTypeRequest,
  updateWorkoutTypeSuccess,
  workoutTypeListFailure,
  workoutTypeListRequest,
  workoutTypeListSuccess,
} from "../store/actions/workoutType";

class WorkoutTypeService {
  // List
  static WorkoutTypeList = () => {
    return (dispatch) => {
      dispatch(workoutTypeListRequest());
      axios
        .post("http://localhost:5000/workoutType/list", "")
        .then((res) => {
          dispatch(workoutTypeListSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(workoutTypeListFailure(error));
        });
    };
  };

  // Add
  static CreateWorkoutType = (data) => {
    return (dispatch) => {
      dispatch(addWorkoutTypeRequest());
      axios
        .post("http://localhost:5000/workoutType/create", data)
        .then((res) => {
          dispatch(addWorkoutTypeSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(addWorkoutTypeFailure(error));
        });
    };
  };

  // Delete
  static DeleteWorkoutType = (id) => {
    return (dispatch) => {
      dispatch(deleteWorkoutTypeRequest());
      axios
        .delete("http://localhost:5000/workoutType/delete", {
          data: {
            _id: id,
          },
        })
        .then((res) => {
          dispatch(deleteWorkoutTypeSuccess(id));
        })
        .catch((error) => {
          console.log(error);
          dispatch(deleteWorkoutTypeFailure(error));
        });
    };
  };

  // Edit
  static EditWorkoutType = (data) => {
    return (dispatch) => {
      dispatch(updateWorkoutTypeRequest());
      axios
        .patch("http://localhost:5000/workoutType/update", data)
        .then((res) => {
          dispatch(updateWorkoutTypeSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(updateWorkoutTypeFailure(error));
        });
    };
  };
}

export default WorkoutTypeService;
