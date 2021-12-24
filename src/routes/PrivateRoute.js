import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ title, children }) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (title) {
      document.title = `${(title ? `${title} - ` : "") || ""} Fitness Tracker`;
    } else {
      document.title = "Fitness Tracker";
    }
  }, [title]);

  let location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
