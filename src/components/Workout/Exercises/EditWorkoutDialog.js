import CustomDialog from "../../CustomComponents/CustomDialog";

const EditWorkoutDialog = ({ dialog, handleCloseDialog }) => {
    console.log(dialog);
    return (
        <CustomDialog
            openDialog={dialog.open}
            handleCloseDialog={handleCloseDialog}
            dialogTitle={"Edit Workout"}>Manan</CustomDialog>
    )
}

export default EditWorkoutDialog;