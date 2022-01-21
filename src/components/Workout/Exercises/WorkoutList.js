import "./WorkoutList.css";

const WorkoutList = ({ workoutList, handleDeleteBtn, handleEditBtn }) => {
  // console.log("list", workoutList);
  return (
    <div className="list-container">
      {workoutList.map((wk) => {
        return (
          <div className="item-container" key={wk._id}>
            <h3 style={{ color: "white", fontSize: "1.2rem" }}>
              {wk.workoutName}
            </h3>

            {wk?.exercises?.map((ex, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#e1f1ff",
                    borderRadius: "1rem",
                    padding: "0.5rem",
                    marginTop: "0.7rem",
                  }}
                  key={index}
                >
                  <span>
                    <b>Exercise {index + 1}: </b> {ex.name}
                  </span>
                  <span>
                    <b>Sets : </b> {ex.set || 0}
                  </span>
                  <span>
                    <b>Reps :</b> {ex.reps || 0}
                  </span>
                </div>
              );
            })}
            <div>
              <button
                className="edit-button"
                type="button"
                onClick={() => handleEditBtn(wk)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleDeleteBtn(wk._id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutList;
