import React, { useState } from "react";
import { useSelector } from "react-redux";
import { days, mockData } from "../../mockdata";
import EditWorkoutDialog from "./EditWorkoutDialog";
import "./Workout.css";

const Workout = () => {
  const [editWorkoutDialog, setEditWorkoutDialog] = useState({
    open: false,
  });

  const handleEditWorkoutBtn = (selectedDay) => {
    setEditWorkoutDialog((prev) => ({
      ...prev,
      open: true,
      day: selectedDay,
    }));
  };

  const handleCloseDialog = () => {
    setEditWorkoutDialog((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const data = useSelector((state) => state.workout.workouts);

  return (
    <div>
      <h3>Daily Workout Plan</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {days?.map((item, index) => {
          return (
            <div className="workout-list" key={index}>
              <span style={{ fontSize: "2rem" }}>{item}</span>

              <div className="main-workout">
                {data?.map((wk) => {
                  if (wk.day === item) {
                    return (
                      <div key={wk.day} className="workout-items">
                        <span style={{ fontSize: "1.2rem" }}>
                          <b>Workout : </b>
                          {wk.workout}
                        </span>
                        {wk.exercises.map((ex, index) => {
                          return (
                            <div style={{ marginTop: "0.5rem" }} key={index}>
                              <span style={{ fontSize: "1.2rem" }}>
                                <b> Exercise {index + 1} : </b>
                                {
                                  mockData
                                    .find((m) => m.workoutName === wk.workout)
                                    ?.exercises?.find(
                                      (ee) => ee._id === ex.exerciseId
                                    )?.name
                                }
                              </span>
                              <div>
                                <span>{ex.set} sets</span>-
                                <span>{ex.reps} reps</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  return null;
                })}
                <button
                  type="button"
                  onClick={() => handleEditWorkoutBtn(item)}
                  className="edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <EditWorkoutDialog
        dialog={editWorkoutDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </div>
  );
};

export default Workout;
