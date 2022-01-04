import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(WorkoutTypeService.DeleteWorkoutType(id));
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
          marginTop: "3rem",
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            width: 400,
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
            {workoutTypeList.map((wk) => (
              <TableRow
                key={wk._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {wk.name}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <button type="button" onClick={() => handleEditBtn(wk)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(wk._id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
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
