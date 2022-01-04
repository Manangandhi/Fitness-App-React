import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import WorkoutTypeService from "../../../services/workoutTypeService";

const EditWorkoutType = ({ openEditDialog, handleClose }) => {
  const [name, setName] = useState(openEditDialog?.name);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(
      WorkoutTypeService.EditWorkoutType({
        name: name,
        _id: openEditDialog?._id,
      })
    );
    handleClose();
  };
  return (
    <Dialog
      sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}
      open={openEditDialog.open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#000",
          fontWeight: "600",
          backgroundImage: `linear-gradient(208deg, rgba(255, 128, 69, 0.4), rgba(57, 142, 220, 0.4))`,
          backgroundColor: "white",
        }}
      >
        Edit Workout Type
      </DialogTitle>
      <Divider />
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >
          <label style={{ marginTop: "0.4rem" }}>Name : </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="" type="button" onClick={handleUpdate}>
          Update
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default EditWorkoutType;
