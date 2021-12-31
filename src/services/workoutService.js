import axios from "axios";
import {
  workoutListFailure,
  workoutListRequest,
  workoutListSuccess,
} from "../store/actions/workoutActions";

class WorkoutService {
  static workoutList = () => {
    return (dispatch) => {
      dispatch(workoutListRequest());
      axios
        .post("http://localhost:5000/workout/list", "")
        .then((res) => {
          dispatch(workoutListSuccess(res.data));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(workoutListFailure(error));
        });
    };
  };
}

export default WorkoutService;
