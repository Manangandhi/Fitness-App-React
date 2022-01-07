import axios from "axios";
import { toast } from "react-toastify";
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
        .post(`${process.env.REACT_APP_API_URL}/workoutType/list`, "")
        .then((res) => {
          dispatch(workoutTypeListSuccess(res.data));
        })
        .catch((error) => {
          dispatch(workoutTypeListFailure(error));
          toast.error("Error fetching workout type");
        });
    };
  };

  // Add
  static CreateWorkoutType = (data) => {
    return (dispatch) => {
      dispatch(addWorkoutTypeRequest());
      axios
        .post(`${process.env.REACT_APP_API_URL}/workoutType/create`, data)
        .then((res) => {
          dispatch(addWorkoutTypeSuccess(res.data));
          toast.success("Workout Type created successfully");
        })
        .catch((error) => {
          dispatch(addWorkoutTypeFailure(error));
          toast.error("Error creating workout type");
        });
    };
  };

  // Delete
  static DeleteWorkoutType = (id) => {
    return (dispatch) => {
      dispatch(deleteWorkoutTypeRequest());
      axios
        .delete(`${process.env.REACT_APP_API_URL}/workoutType/delete`, {
          data: {
            _id: id,
          },
        })
        .then((res) => {
          dispatch(deleteWorkoutTypeSuccess(id));
          toast.success("Workout Type deleted successfully");
        })
        .catch((error) => {
          dispatch(deleteWorkoutTypeFailure(error));
          toast.error("Error deleting workout type");
        });
    };
  };

  // Edit
  static EditWorkoutType = (data) => {
    return (dispatch) => {
      dispatch(updateWorkoutTypeRequest());
      axios
        .patch(`${process.env.REACT_APP_API_URL}/workoutType/update`, data)
        .then((res) => {
          dispatch(updateWorkoutTypeSuccess(res.data));
          toast.success("Workout Type updated successfully");
        })
        .catch((error) => {
          dispatch(updateWorkoutTypeFailure(error));
          toast.error("Error updating workout type");
        });
    };
  };
}

export default WorkoutTypeService;
