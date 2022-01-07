import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import WorkoutService from "../../../services/workoutService";
import AddWorkoutForm from "./AddWorkoutForm";
import "./Workout.css";
import WorkoutList from "./WorkoutList";

const Workout = () => {
  const [toggleForm, setToggleForm] = useState(false);

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
      <button className="add-btn" type="button" onClick={handleAddWorkout}>
        Add Workout
      </button>
      {toggleForm && (
        <AddWorkoutForm
          workoutList={workoutList}
          setToggleForm={setToggleForm}
        />
      )}
      <WorkoutList
        workoutList={workoutList}
        handleDeleteBtn={handleDeleteBtn}
      />
    </div>
  );
};

export default Workout;
