import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";

const CustomDialog = ({ openDialog, handleCloseDialog, dialogTitle, children }) => {
    return (
        <Dialog
            sx={{ maxWidth: "500px", width: "100%", margin: "auto" }}
            open={openDialog}
            onClose={handleCloseDialog}
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
                {dialogTitle}
            </DialogTitle>
            <Divider />
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default CustomDialog