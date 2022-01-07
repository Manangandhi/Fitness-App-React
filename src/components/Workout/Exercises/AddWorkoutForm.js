import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import WorkoutService from "../../../services/workoutService";
import "./AddWorkoutForm.css";

const initialData = {
  exerciseName: "",
  reps: "",
  set: "",
};

const AddWorkoutForm = ({ setToggleForm, workoutList }) => {
  const [addWorkoutDataInput, setAddWorkoutDataInput] = useState([
    {
      ...initialData,
      id: 1,
    },
  ]);

  const [workoutTypeInput, setWorkoutTypeInput] = useState("");

  const dispatch = useDispatch();

  const workoutType = useSelector((state) => state.workoutType.types);
  const handleAddMoreExerciseBtn = () => {
    setAddWorkoutDataInput((prev) => [
      ...prev,
      {
        ...initialData,
        id: prev.length + 1,
      },
    ]);
  };

  const handleDataChange = (e, id) => {
    setAddWorkoutDataInput((prev) =>
      prev.map((p) => {
        if (id === p.id) {
          return {
            ...p,
            [e.target.name]: e.target.value,
          };
        }
        return p;
      })
    );
  };

  const handleSubmitBtn = () => {
    dispatch(
      WorkoutService.createWorkout({
        workoutName: workoutTypeInput,
        exercises: [
          {
            name: addWorkoutDataInput.exerciseName,
            reps: addWorkoutDataInput.reps,
            set: addWorkoutDataInput.set,
          },
        ],
      })
    );
    setAddWorkoutDataInput(initialData);
    setToggleForm((prev) => !prev);
  };

  let filteredTypeName = workoutType?.filter((ty) => {
    let findType = workoutList?.find((wk) => wk?.workoutName === ty?.name);
    if (findType) return false;
    return true;
  });

  return (
    <div className="form-main-wrapper">
      {
        <div className="form-wrapper">
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 150 }}
          >
            <InputLabel id="workoutType">Workout Type</InputLabel>
            <Select
              labelId="workoutType"
              id="workoutType"
              value={workoutTypeInput}
              onChange={(e) => setWorkoutTypeInput(e.target.value)}
              label="Workout Type"
              name="workoutTypeInput"
            >
              {filteredTypeName?.map((wk) => {
                return (
                  <MenuItem key={wk._id} value={wk.name}>
                    {wk.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* Exercise Wrapper */}
          {addWorkoutDataInput.map((inpt, idx) => {
            return (
              <div className="exercise-content-wrapper" key={inpt.id}>
                <label>Exercise Name </label>
                <input
                  type="text"
                  value={addWorkoutDataInput[idx].exerciseName}
                  onChange={(e) => handleDataChange(e, inpt.id)}
                  name="exerciseName"
                />
                <div style={{ display: "flex", marginTop: "0.5rem" }}>
                  <label style={{ marginTop: "0.4rem" }}>Sets: </label>&ensp;
                  <input
                    name="set"
                    type="number"
                    value={addWorkoutDataInput[idx].set}
                    onChange={(e) => handleDataChange(e, inpt.id)}
                    className="input-field"
                  />
                  &ensp;
                  <label style={{ marginTop: "0.4rem" }}>Reps: </label>&ensp;
                  <input
                    name="reps"
                    type="number"
                    value={addWorkoutDataInput[idx].reps}
                    onChange={(e) => handleDataChange(e, inpt.id)}
                    className="input-field"
                  />
                </div>
              </div>
            );
          })}
          {/* .......END */}

          <button
            className="add-exercise-btn"
            type="button"
            onClick={handleAddMoreExerciseBtn}
          >
            + Add More Exercises
          </button>
          <button
            className="submit-btn"
            type="button"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </div>
      }
    </div>
  );
};

export default AddWorkoutForm;
