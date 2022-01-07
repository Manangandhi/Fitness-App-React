import { useState } from "react";
import { useDispatch } from "react-redux";
// import { RiLoader2Line } from "react-icons/ri";
import WorkoutTypeService from "../../../services/workoutTypeService";
import WorkoutTypeList from "./WorkoutTypeList";
import "./WorkoutType.css";

const WorkoutType = () => {
  const [openAddForm, setOpenAddForm] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(WorkoutTypeService.CreateWorkoutType({ name: name }));
    setName("");
    setOpenAddForm(!openAddForm);
  };

  return (
    <div className="contain-main-wrapper">
      <button
        type="button"
        className="add-type-btn"
        onClick={() => setOpenAddForm(!openAddForm)}
      >
        Add Workout Type
      </button>

      {openAddForm && (
        <div className="contain-wrapper">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="button"
            className="submit-btn-style"
            onClick={handleSubmit}
          >
            Submit
            {/* {submitting ? (
              <RiLoader2Line icon="spinner" className="spinner" />
            ) : (
              "Submit"
            )} */}
          </button>
        </div>
      )}

      <WorkoutTypeList />
    </div>
  );
};

export default WorkoutType;
