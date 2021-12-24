import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { days, mockData } from "../../mockdata";

const AddWorkoutDialog = ({ dialog, handleCloseDialog }) => {
  const [day, setDay] = useState("");
  const [workout, setWorkout] = useState([]);

  const handleChange = (e) => {
    setDay(e.target.value);
  };

  const handleWorkoutChange = (e) => {
    setWorkout(e.target.value);
  };

  const handleClose = () => {
    handleCloseDialog();
    setDay("");
    setWorkout([]);
  };

  return (
    <Dialog
      sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}
      open={dialog.open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#000",
          fontWeight: "600",
          backgroundImage: `linear-gradient(
            218deg,
            rgb(201 25 49 / 75%),
            rgb(0 138 255 / 56%)
          )`,
          backgroundColor: "white",
        }}
      >
        Add Workout
      </DialogTitle>
      <Divider />
      <DialogContent>
        {/* Days */}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Days</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="day"
            value={day}
            onChange={handleChange}
            label="Select Day"
            name="day"
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Workouts */}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Workouts
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={workout}
            onChange={handleWorkoutChange}
            label="Select Workout"
            name="workout"
          >
            {mockData.map((w) => (
              <MenuItem key={w._id} value={w.workoutName}>
                {w.workoutName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {mockData
          .find((e) => e.workoutName === workout)
          ?.exercises?.map((ex) => (
            <li key={ex.name}>
              {ex.name} With {ex.weight} and {ex.rep}reps
            </li>
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default AddWorkoutDialog;
