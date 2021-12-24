import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./routesArray";

const RoutesComponent = () => {
  const routesMap = useMemo(() => {
    return (routes || []).map(
      ({ path, Component, isAuthenticated, title, ...props }) => {
        let RouteComp = isAuthenticated ? (
          <PrivateRoute {...props} title={title}>
            {Component}
          </PrivateRoute>
        ) : (
          <Component {...props} title={title} />
        );

        return (
          <Route
            key={path + title}
            title={title}
            path={path}
            element={RouteComp}
          />
        );
      }
    );
  }, []);

  return (
    <Routes>
      {routesMap}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>page Not Found!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
