import { useState } from "react";
import { useDispatch } from "react-redux";
import WorkoutTypeService from "../../../services/workoutTypeService";
import WorkoutTypeList from "./WorkoutTypeList";

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
    <div>
      <button
        type="button"
        className=""
        onClick={() => setOpenAddForm(!openAddForm)}
      >
        Add Workout Type
      </button>

      {openAddForm && (
        <div className="">
          <label>Name: </label>
          <input
            type="text"
            className=""
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" className="" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}

      <WorkoutTypeList />
    </div>
  );
};

export default WorkoutType;
