import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import WorkoutService from "../../../services/workoutService";
import AddWorkout from "./AddWorkout";
import EditWorkout from "./EditWorkout";
import "./Workout.css";
import WorkoutList from "./WorkoutList";

const defaultWorkoutValue = {
  name: "",
}

const defaultExercisesValue = {
  name: "",
  reps: "",
  set: ""
}

const Workout = () => {
  const [view, setView] = useState({
    openForm: "",
    open: false
  });

  const [selectedWorkout, setSelectedWorkout] = useState(defaultWorkoutValue);
  const [exerciseData, setExerciseData] = useState([{
    ...defaultExercisesValue,
    id: 1
  }])

  const workoutList = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkoutService.workoutList());
  }, [dispatch]);

  const handleAddWorkout = () => {
    setView((prev) => ({
      ...prev,
      openForm: "create",
      open: !prev.open
    }));
  };

  const handleEditBtn = (data) => {
    setView((prev) => ({
      ...prev,
      openForm: "update",
      open: !prev.open
    }));
  };

  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        // Dispatch Function
        let deleted = dispatch(WorkoutService.deleteWorkout(id));

        if (deleted) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div className="main-container">
      <button className="add-btn" type="button" onClick={handleAddWorkout}>
        Add Workout
      </button>
      {view.openForm === "create" ? (
        <AddWorkout
          setView={setView}
          defaultExercisesValue={defaultExercisesValue}
          defaultWorkoutValue={defaultWorkoutValue}
          workoutList={workoutList}
          setSelectedWorkout={setSelectedWorkout}
          selectedWorkout={selectedWorkout}
          exerciseData={exerciseData}
          setExerciseData={setExerciseData}
        />
      ) : view.openForm === "update" &&
      <EditWorkout />
      }

      <WorkoutList
        workoutList={workoutList}
        handleDeleteBtn={handleDeleteBtn}
        handleEditBtn={handleEditBtn}
      />
    </div>
  );
};

export default Workout;
