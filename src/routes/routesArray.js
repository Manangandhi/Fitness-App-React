import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/Signup/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import Workout from "../components/Workout/Exercises/Workout";
import WorkoutType from "../components/Workout/WorkoutType/WorkoutType";
import WorkoutPlan from "../components/Workout/WorkoutPlan/WorkoutPlan";

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
    path: "/workoutType",
    title: "Workout Type",
    Component: (
      <MakeLayoutComponent title="Workout Type" Component={WorkoutType} />
    ),
    isAuthenticated: true,
  },
  {
    path: "/workout",
    title: "Exercises",
    Component: <MakeLayoutComponent title="Exercises" Component={Workout} />,
    isAuthenticated: true,
  },
  {
    path: "/workoutPlan",
    title: "Workout Plan",
    Component: (
      <MakeLayoutComponent title="Workout Plan" Component={WorkoutPlan} />
    ),
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
