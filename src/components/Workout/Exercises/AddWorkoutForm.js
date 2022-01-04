import { useSelector } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./AddWorkoutForm.css";

const AddWorkoutForm = ({
  handleAddWorkout,
  toggleForm,
  addWorkoutData,
  handleDataChange,
  handleSubmitBtn,
}) => {
  const workoutType = useSelector((state) => state.workoutType.types);

  return (
    <div className="form-main-wrapper">
      <button className="add-btn" type="button" onClick={handleAddWorkout}>
        Add Workout
      </button>
      {toggleForm && (
        <div className="form-wrapper">
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, width: 150 }}
          >
            <InputLabel id="workoutType">Workout Type</InputLabel>
            <Select
              labelId="workoutType"
              id="workoutType"
              value={addWorkoutData.name}
              onChange={handleDataChange}
              label="Workout Type"
              name="name"
            >
              {workoutType.map((wk) => {
                return (
                  <MenuItem key={wk._id} value={wk.name}>
                    {wk.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <label>Exercise Name </label>
          <input
            type="text"
            value={addWorkoutData.exerciseName}
            onChange={handleDataChange}
            name="exerciseName"
          />
          <div style={{ display: "flex", marginTop: "0.5rem" }}>
            <label style={{ marginTop: "0.4rem" }}>Sets: </label>&ensp;
            <input
              name="set"
              type="number"
              value={addWorkoutData.set}
              onChange={handleDataChange}
              className="input-field"
            />
            &ensp;
            <label style={{ marginTop: "0.4rem" }}>Reps: </label>&ensp;
            <input
              name="reps"
              type="number"
              value={addWorkoutData.reps}
              onChange={handleDataChange}
              className="input-field"
            />
          </div>
          &ensp;
          <button
            className="submit-btn"
            type="button"
            onClick={handleSubmitBtn}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddWorkoutForm;
