import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/Signup/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import Workout from "../components/Workout/Workout";

const MakeLayoutComponent = ({ Component, title }) => {
  return (
    <Layout title={title}>
      <Component />
    </Layout>
  );
};

const routes = [
  {
    path: "/",
    title: "Dashboard",
    Component: <MakeLayoutComponent title="Dashboard" Component={Dashboard} />,
    isAuthenticated: true,
  },
  {
    path: "/workout",
    title: "workout",
    Component: <MakeLayoutComponent title="Workout" Component={Workout} />,
    isAuthenticated: true,
  },
  {
    path: "/signup",
    title: "SignUp",
    Component: SignUp,
    isAuthenticated: false,
  },
  {
    path: "/login",
    title: "Login",
    Component: Login,
    isAuthenticated: false,
  },
];

export default routes;
