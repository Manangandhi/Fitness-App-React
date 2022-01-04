import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import RoutesComponent from "./routes/Routes";

const App = () => {
  return (
    <div className="App">
      <ToastContainer
        autoClose={4000}
        transition={Bounce}
        position="top-center"
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RoutesComponent />
    </div>
  );
};

export default App;
