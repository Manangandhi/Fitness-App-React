import { useEffect } from "react";
import { useDispatch } from "react-redux";
import WorkoutTypeService from "../../../services/workoutTypeService";
import WorkoutForm from "./WorkoutForm";

const AddWorkout = (
  {
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

  // Workout Type API call 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkoutTypeService.WorkoutTypeList());
  }, [dispatch]);

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
  );
};

export default AddWorkout;
