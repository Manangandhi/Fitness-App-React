import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditWorkoutType from "./EditWorkoutType.js";
import WorkoutTypeService from "../../../services/workoutTypeService";

const WorkoutTypeList = () => {
  const [openEditDialog, setOpenEditDialog] = useState({
    open: false,
    _id: "",
    name: "",
  });

  const workoutTypeList = useSelector((state) => state.workoutType.types);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(WorkoutTypeService.WorkoutTypeList());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        // Dispatch Function
        let deleted = dispatch(WorkoutTypeService.DeleteWorkoutType(id));

        if (deleted) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  const handleEditBtn = (data) => {
    setOpenEditDialog((prev) => ({
      ...prev,
      open: true,
      _id: data._id,
      name: data.name,
    }));
  };

  const handleClose = () => {
    setOpenEditDialog((prev) => ({
      ...prev,
      open: false,
      _id: "",
      name: "",
    }));
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          boxShadow: "none",
          marginTop: "1.5rem",
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            width: 350,
            boxShadow: "rgb(128 128 128 / 42%) 3px 4px 10px 2px",
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#84a9e2",
                borderBottom: "1.5px solid lightgray",
                height: "3rem",
              }}
            >
              <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "white" }}
                align="center"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutTypeList && workoutTypeList.length > 0 ? (
              workoutTypeList.map((wk) => (
                <TableRow
                  key={wk._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {wk.name}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <button
                      style={{
                        backgroundColor: "#3f4397",
                        color: "white",
                        padding: "0.5rem",
                        marginTop: "1rem",
                        cursor: "pointer",
                        borderRadius: "0.4rem",
                        border: "none",
                        width: "3rem",
                        height: "2rem",
                        margin: "0.5rem",
                      }}
                      type="button"
                      onClick={() => handleEditBtn(wk)}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "0.5rem",
                        marginTop: "1rem",
                        cursor: "pointer",
                        borderRadius: "0.4rem",
                        border: "none",
                        width: "3.5rem",
                        height: "2rem",
                        margin: "0.5rem",
                      }}
                      type="button"
                      onClick={() => handleDelete(wk._id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div>
                <h3>No records Found</h3>
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {openEditDialog?._id && (
        <EditWorkoutType
          handleClose={handleClose}
          openEditDialog={openEditDialog}
        />
      )}
    </>
  );
};

export default WorkoutTypeList;
