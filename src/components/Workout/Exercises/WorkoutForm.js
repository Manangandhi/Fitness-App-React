import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { GiCancel } from "react-icons/gi";
import { useSelector } from "react-redux";
import "./WorkoutForm.css"

const WorkoutForm = ({
    handleWorkoutChange,
    workoutList,
    selectedWorkout,
    exerciseData,
    handleAddMoreExerciseBtn,
    handleDataChange,
    handleSubmitBtn,
    handleCancelBtn
}) => {
    const workoutType = useSelector((state) => state.workoutType.types);

    let filteredTypeName = workoutType?.filter((ty) => {
        let findType = workoutList?.find((wk) => wk?.workoutName === ty?.name);
        if (findType) return false;
        return true;
    });

    return (
        <div className="form-main-wrapper">

            <div className="form-wrapper">
                <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: 120, width: 150 }}
                >
                    <InputLabel id="workoutType">Workout Type</InputLabel>
                    <Select
                        labelId="workoutType"
                        id="workoutType"
                        value={selectedWorkout?.name}
                        onChange={handleWorkoutChange}
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
                {exerciseData?.map((inpt, idx) => {
                    return (
                        <div className="exercise-content-wrapper" key={inpt.id}>
                            {idx > 0 && (
                                <GiCancel
                                    className="cancel-btn"
                                    onClick={() => handleCancelBtn(inpt.id)}
                                />
                            )}
                            <label>Exercise Name </label>
                            <input
                                type="text"
                                value={exerciseData[idx].name}
                                onChange={(e) => handleDataChange(e, inpt.id)}
                                name="name"
                            />
                            <div style={{ display: "flex", marginTop: "0.5rem" }}>
                                <label style={{ marginTop: "0.4rem" }}>Sets: </label>&ensp;
                                <input
                                    name="set"
                                    type="number"
                                    value={exerciseData[idx].set}
                                    onChange={(e) => handleDataChange(e, inpt.id)}
                                    className="input-field"
                                />
                                &ensp;
                                <label style={{ marginTop: "0.4rem" }}>Reps: </label>&ensp;
                                <input
                                    name="reps"
                                    type="number"
                                    value={exerciseData[idx].reps}
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

        </div>
    )
}

export default WorkoutForm