import "./AddWorkoutForm.css";

const AddWorkoutForm = ({
  handleAddWorkout,
  toggleForm,
  addWorkoutData,
  handleDataChange,
  handleSubmitBtn,
}) => {
  return (
    <div className="form-main-wrapper">
      <button className="add-btn" type="button" onClick={handleAddWorkout}>
        Add Workout
      </button>
      {toggleForm && (
        <div className="form-wrapper">
          <label>Workout Type </label>
          <input
            type="text"
            value={addWorkoutData.workoutName}
            onChange={handleDataChange}
            name="workoutName"
          />
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
