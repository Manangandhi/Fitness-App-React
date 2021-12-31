import React, { useState } from "react";
import { useSelector } from "react-redux";
import { days, mockData } from "../../mockdata";
import EditWorkoutDialog from "./EditWorkoutPlanDialog";
import "./WorkoutPlan.css";

const WorkoutPlan = () => {
  const [editWorkoutDialog, setEditWorkoutDialog] = useState({
    open: false,
  });
  const data = useSelector((state) => state.workout.workouts);

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

  return (
    <div>
      <h3>Daily Workout Plan</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {days?.map((item, index) => {
          let isWorkoutAdded = data?.find((res) => res.day === item);
          return (
            <div
              className="workout-list"
              style={{ background: !isWorkoutAdded ? "#b7b7b7" : "" }}
              key={index}
            >
              <span style={{ fontSize: "2rem" }}>{item}</span>
              <button
                type="button"
                onClick={() => handleEditWorkoutBtn(item)}
                className="edit-btn"
                style={{ background: isWorkoutAdded ? "#a92d2d" : "" }}
              >
                {isWorkoutAdded ? "Edit" : "Add"}
              </button>

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
                                <span>{ex.set} set</span>-
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

export default WorkoutPlan;
