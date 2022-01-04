import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutService from "../../../services/workoutService";
import AddWorkoutForm from "./AddWorkoutForm";
import "./Workout.css";
import WorkoutList from "./WorkoutList";

const initialData = {
  workoutName: "",
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
        workoutName: addWorkoutData.workoutName,
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
    dispatch(WorkoutService.deleteWorkout(id));
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
      <h3>Workout List</h3>
      <WorkoutList
        workoutList={workoutList}
        handleDeleteBtn={handleDeleteBtn}
      />
    </div>
  );
};

export default Workout;
