import { useEffect } from "react";

import { useDispatch } from "react-redux";

import WorkoutService from "../../../services/workoutService";
import WorkoutTypeService from "../../../services/workoutTypeService";
import WorkoutForm from "./WorkoutForm";


const AddWorkout = (
  {
    setSelectedWorkout,
    selectedWorkout,
    exerciseData,
    setExerciseData,
    workoutList,
    defaultExercisesValue,
    defaultWorkoutValue,
    setView
  }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkoutTypeService.WorkoutTypeList());
  }, [dispatch]);


  const handleAddMoreExerciseBtn = () => {
    setExerciseData((prev) => [
      ...prev,
      {
        ...defaultExercisesValue,
        id: prev.length + 1
      }

    ]);
  };


  const handleDataChange = (e, id) => {
    setExerciseData((prev) =>
      prev?.map((p) => {
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
        workoutName: selectedWorkout?.name,
        exercises: exerciseData,
      })
    );
    setExerciseData([{
      ...defaultExercisesValue,
      id: 1
    }]);
    setSelectedWorkout({});
    setView({ open: false })
  };

  const handleCancelBtn = (id) => {
    setExerciseData((prev) => prev.filter((p) => p.id !== id));
  };

  const handleWorkoutChange = (e) => {
    setSelectedWorkout((prev) => ({
      ...prev,
      name: e.target.value,
    }))
  }

  return (
    <WorkoutForm
      handleWorkoutChange={handleWorkoutChange}
      workoutList={workoutList}
      selectedWorkout={selectedWorkout}
      exerciseData={exerciseData}
      handleAddMoreExerciseBtn={handleAddMoreExerciseBtn}
      handleDataChange={handleDataChange}
      handleSubmitBtn={handleSubmitBtn}
      handleCancelBtn={handleCancelBtn}
    />
  );
};

export default AddWorkout;
