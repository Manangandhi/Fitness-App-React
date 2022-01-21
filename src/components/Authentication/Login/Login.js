import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import AuthService from "../../../services/AuthService";
import CustomFormInput from "../../CustomForm/CustomFormInput";
import "../Login/Login.css";

const initialData = {
  email: "",
  password: "",
};

const Login = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginBtn = () => {
    setLoading(true);
    dispatch(
      AuthService.Login({
        email: signupData.email,
        password: signupData.password,
      })
    );
    setSignupData(initialData) && setLoading(false);
  };

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <div className="login-wrapper">
      <div className="login-form-wrapper">
        <h1>Login</h1>
        <label className="input-label">Username</label>
        <CustomFormInput
          type="email"
          name="email"
          placeholder="Username"
          value={signupData.email}
          onChange={handleOnChange}
          className="login-form-input"
        />
        <label className="input-label">Password</label>
        <CustomFormInput
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleOnChange}
          className="login-form-input"
        />
        <button
          className="login-form-btn"
          type="button"
          onClick={handleLoginBtn}
          disabled={loading}
        >
          {loading ? (
            <ImSpinner6 icon="spinner" className="spinner" />
          ) : (
            "Login"
          )}
        </button>
        <span style={{ marginTop: "1.5rem" }}>
          New Member? &nbsp;
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
