import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import WorkoutService from "../../../services/workoutService";
import AddWorkoutForm from "./AddWorkoutForm";
import "./Workout.css";
import WorkoutList from "./WorkoutList";

const initialData = {
  name: "",
  exerciseName: "",
  reps: "",
  set: "",
};

const Workout = () => {
  const [addWorkoutData, setAddWorkoutData] = useState(initialData);
  const [toggleForm, setToggleForm] = useState(false);
  const handleDataChange = (e) => {
    setAddWorkoutData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitBtn = () => {
    dispatch(
      WorkoutService.createWorkout({
        workoutName: addWorkoutData.name,
        exercises: [
          {
            name: addWorkoutData.exerciseName,
            reps: addWorkoutData.reps,
            set: addWorkoutData.set,
          },
        ],
      })
    );
    setAddWorkoutData(initialData);
    setToggleForm(!toggleForm);
  };

  const handleAddWorkout = () => {
    setToggleForm(!toggleForm);
  };

  const dispatch = useDispatch();
  const workoutList = useSelector((state) => state.workouts.workouts);
  useEffect(() => {
    dispatch(WorkoutService.workoutList());
  }, [dispatch]);

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
      <AddWorkoutForm
        handleAddWorkout={handleAddWorkout}
        toggleForm={toggleForm}
        addWorkoutData={addWorkoutData}
        handleDataChange={handleDataChange}
        handleSubmitBtn={handleSubmitBtn}
      />
      <WorkoutList
        workoutList={workoutList}
        handleDeleteBtn={handleDeleteBtn}
      />
    </div>
  );
};

export default Workout;
