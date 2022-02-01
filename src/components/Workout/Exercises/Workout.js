import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import WorkoutService from "../../../services/workoutService";
import AddWorkout from "./AddWorkout";
import EditWorkout from "./EditWorkout";
import WorkoutList from "./WorkoutList";
import "./Workout.css";
import * as uuid from "uuid";

const defaultWorkoutValue = {
  name: "",
  _id: ""
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
    ...defaultExercisesValue
  }]);

  const workoutList = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkoutService.workoutList());
  }, [dispatch]);

  // Reset Workout Form
  const resetForm = () => {
    setExerciseData([{
      ...defaultExercisesValue,
      exerciseIndex: uuid.v4()
    }]);
    setSelectedWorkout(defaultWorkoutValue)
  }

  // Add Workout Btn
  const handleAddWorkout = () => {
    setView((prev) => ({
      ...prev,
      openForm: "create",
      open: !prev.open
    }));
    resetForm();
  };

  // Edit Btn
  const handleEditBtn = (data) => {
    setView((prev) => ({
      ...prev,
      openForm: "update",
      open: !prev.open
    }));
    setSelectedWorkout(
      {
        name: data?.workoutName,
        _id: data?._id
      });
    setExerciseData(data?.exercises)
  };

  // Delete Btn
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
      {view.open === false && <button className="add-btn" type="button" onClick={handleAddWorkout}>
        Add Workout
      </button>}
      {view.openForm === "create" ? (
        <AddWorkout
          defaultExercisesValue={defaultExercisesValue}
          workoutList={workoutList}
          // View State
          view={view}
          setView={setView}
          // Workout State
          selectedWorkout={selectedWorkout}
          setSelectedWorkout={setSelectedWorkout}
          // Exercise State
          exerciseData={exerciseData}
          setExerciseData={setExerciseData}
          resetForm={resetForm}
        />
      ) : view.openForm === "update" &&
      <EditWorkout
        defaultExercisesValue={defaultExercisesValue}
        workoutList={workoutList}
        // View State
        view={view}
        setView={setView}
        // Workout State
        selectedWorkout={selectedWorkout}
        setSelectedWorkout={setSelectedWorkout}
        // Exercise State
        exerciseData={exerciseData}
        setExerciseData={setExerciseData}
        resetForm={resetForm}
      />
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
