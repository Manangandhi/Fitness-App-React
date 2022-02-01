import WorkoutForm from "./WorkoutForm";

const EditWorkout = ({
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

    return (
        <WorkoutForm
            view={view}
            setView={setView}
            workoutList={workoutList}
            selectedWorkout={selectedWorkout}
            setSelectedWorkout={setSelectedWorkout}
            exerciseData={exerciseData}
            setExerciseData={setExerciseData}
            defaultExercisesValue={defaultExercisesValue}
            resetForm={resetForm}
        />
    )
}

export default EditWorkout;