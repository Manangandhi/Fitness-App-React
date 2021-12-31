import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutService from "../../services/workoutService";
// import { GoDiffAdded } from "react-icons/go";
// import { mockData } from "../../mockdata";

const Workout = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const dispatch = useDispatch();

  const workoutList = useSelector((state) => state.workouts.workouts);
  console.log("list", workoutList);

  useEffect(() => {
    dispatch(WorkoutService.workoutList());
  }, [dispatch]);

  const handleAddWorkout = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div>
      <button
        style={{
          background: "#3aa2fd",
          //   width: "80%",
          color: "white",
          padding: "0.5rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        type="button"
        onClick={handleAddWorkout}
      >
        <div>
          {/* <GoDiffAdded style={{ display: "inline-block", textAlign: "top" }} /> */}
          Add Workout
        </div>
      </button>

      {toggleForm && (
        <div>
          <label>Workout Name: </label>
          <input type="text" placeholder="Enter Workout Name Here..." />
          <label>Exercise Name: </label>
          <input type="text" placeholder="Enter Workout Name Here..." />
        </div>
      )}
      {workoutList.map((wk) => {
        return (
          <div key={wk._id}>
            <li>{wk.workoutName}</li>
            {wk?.exercises?.map((ex) => {
              return (
                <span key={ex.name}>
                  {ex.name}-{ex.reps}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Workout;
