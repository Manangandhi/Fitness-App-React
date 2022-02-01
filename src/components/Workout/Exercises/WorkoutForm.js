import { FormControl, InputLabel, Select, MenuItem, Stack, Alert } from "@mui/material";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import * as uuid from "uuid"
import WorkoutService from "../../../services/workoutService";
import "./WorkoutForm.css"

const WorkoutForm = ({
    defaultExercisesValue,
    workoutList,
    // View State
    view,
    setView,
    // Workout State
    selectedWorkout,
    setSelectedWorkout,
    // Exercise State
    exerciseData,
    setExerciseData,
    resetForm
}) => {

    const dispatch = useDispatch()

    // Filterd WorkoutType-> Once user add wkType, this selected wkType can't show in add workout section
    const workoutType = useSelector((state) => state.workoutType.types);
    let filteredTypeName = workoutType?.filter((ty) => {
        let findType = workoutList?.find((wk) => wk?.workoutName === ty?.name);
        if (findType) return false;
        return true;
    });

    // Disabled inputs when no workoutType
    const disabledExercise = filteredTypeName?.length <= 0 && view?.openForm === "create"

    // Close btn for the add and update form
    const handleCloseForm = () => {
        setView({ open: false })
    }

    // When user click the add more exercise btn in add and update section
    const handleAddMoreExerciseBtn = () => {
        setExerciseData((prev) => [
            ...prev,
            {
                ...defaultExercisesValue,
                exerciseIndex: uuid.v4()
            }
        ]);
    };

    // Exercises -> Input OnChange
    const handleDataChange = (e, exerciseIndex) => {
        setExerciseData((prev) =>
            prev?.map((p) => {
                if (exerciseIndex === (p._id || p.exerciseIndex)) {
                    return {
                        ...p,
                        [e.target.name]: e.target.value,
                    };
                }
                return p;
            })
        );
    };

    // Workout Type -> OnChange
    const handleWorkoutChange = (e) => {
        setSelectedWorkout((prev) => ({
            ...prev,
            name: e.target.value,
        }))
    }

    // Exercise cancel Btn
    const handleCancelBtn = (exerciseIndex) => {
        setExerciseData((prev) => prev.filter((p) => (p._id || p.exerciseIndex) !== exerciseIndex));
    };

    // Submit Btn
    const handleSubmitBtn = () => {
        if (view?.openForm === "create") {
            dispatch(
                WorkoutService.createWorkout({
                    workoutName: selectedWorkout?.name,
                    exercises: exerciseData,
                })
            );
        } else {
            dispatch(
                WorkoutService.UpdateWorkout({
                    _id: selectedWorkout?._id,
                    workoutName: selectedWorkout?.name,
                    exercises: exerciseData,
                })
            );
        }
        resetForm()
        setView({ open: false })
    };

    return (
        <div className="form-main-wrapper">

            <div className="form-wrapper">
                <MdCancel
                    className="cancel-btn"
                    style={{ marginLeft: "20rem", fontSize: "1.6rem" }}
                    onClick={handleCloseForm}
                />
                {view?.openForm === "create" && filteredTypeName?.length > 0 ?
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120, width: 150 }}
                    >
                        <InputLabel id="name">Workout Type</InputLabel>
                        <Select
                            labelId="name"
                            id="name"
                            value={selectedWorkout?.name || ""}
                            onChange={handleWorkoutChange}
                            label="Workout Type"
                            name="name"
                        >
                            {filteredTypeName?.map((wk) => {
                                return (
                                    <MenuItem key={wk._id} value={wk.name}>
                                        {wk.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl> :
                    disabledExercise ?
                        <Stack sx={{ width: '100%', margin: "1rem 2rem 1.5rem 2rem" }} spacing={2}>
                            <Alert severity="warning">You can't add workout, First create Workout Type</Alert>
                        </Stack> :
                        <p>{selectedWorkout?.name}</p>
                }

                {exerciseData?.map((ex, index) => {
                    return (
                        <div className="exercise-content-wrapper" key={ex.exerciseIndex || ex._id}>
                            {index > 0 && (
                                <GiCancel
                                    className="cancel-btn"
                                    onClick={() => handleCancelBtn(ex.exerciseIndex || ex._id)}
                                />
                            )}
                            <label>Exercise Name </label>
                            <input
                                disabled={disabledExercise}
                                type="text"
                                value={exerciseData[index].name || ""}
                                onChange={(e) => handleDataChange(e, ex.exerciseIndex || ex._id)}
                                name="name"
                            />
                            <div style={{ display: "flex", marginTop: "0.5rem" }}>
                                <label style={{ marginTop: "0.4rem" }}>Sets: </label>&ensp;
                                <input
                                    disabled={disabledExercise}
                                    name="set"
                                    type="number"
                                    value={exerciseData[index].set || ""}
                                    onChange={(e) => handleDataChange(e, ex.exerciseIndex || ex._id)}
                                    className="input-field"
                                />
                                &ensp;
                                <label style={{ marginTop: "0.4rem" }}>Reps: </label>&ensp;
                                <input
                                    disabled={disabledExercise}
                                    name="reps"
                                    type="number"
                                    value={exerciseData[index].reps || ""}
                                    onChange={(e) => handleDataChange(e, ex.exerciseIndex || ex._id)}
                                    className="input-field"
                                />
                            </div>
                        </div>
                    );
                })}
                {/* .......END */}

                <button
                    disabled={disabledExercise}
                    className="add-exercise-btn"
                    type="button"
                    onClick={handleAddMoreExerciseBtn}
                >
                    + Add More Exercises
                </button>
                <button
                    disabled={disabledExercise}
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