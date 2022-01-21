import { useState } from "react";
import { useDispatch } from "react-redux";
import WorkoutTypeService from "../../../services/workoutTypeService";
import CustomDialog from "../../CustomComponents/CustomDialog";

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
    <CustomDialog
      openDialog={openEditDialog.open}
      handleCloseDialog={handleClose}
      dialogTitle={"Edit Workout Type"}>
      <div className="dialog-container">
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="update-btn" type="button" onClick={handleUpdate}>
        Update
      </button>
    </CustomDialog>




  );
};

export default EditWorkoutType;
