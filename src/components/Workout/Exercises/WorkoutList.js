import "./WorkoutList.css";

const WorkoutList = ({ workoutList, handleDeleteBtn }) => {
  return (
    <div className="list-container">
      {workoutList.map((wk) => {
        return (
          <div className="item-container" key={wk._id}>
            <h3>{wk.workoutName}</h3>

            {wk?.exercises?.map((ex, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={index}
                >
                  <span>
                    Exercise {index + 1}: {ex.name}
                  </span>
                  <span>
                    sets: {ex.set} and reps: {ex.reps}
                  </span>
                </div>
              );
            })}
            <div>
              <button
                className="edit-button"
                type="button"
                // onClick={() => handleDeleteBtn(wk._id)}
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
