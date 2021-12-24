import { useState } from "react";
import AddWorkoutDialog from "./AddWorkoutDialog";

const Workout = () => {
  const [addWorkoutDialog, setAddWorkoutDialog] = useState({
    open: false,
  });

  const handleAddBtn = () => {
    setAddWorkoutDialog((prev) => ({
      ...prev,
      open: true,
    }));
  };

  const handleCloseDialog = () => {
    setAddWorkoutDialog((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <div>
      <span>This is a workout page</span>
      <button type="button" onClick={handleAddBtn}>
        Add Workout
      </button>

      <AddWorkoutDialog
        dialog={addWorkoutDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </div>
  );
};

export default Workout;
