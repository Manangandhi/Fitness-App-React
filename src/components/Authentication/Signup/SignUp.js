import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import AuthService from "../../../services/AuthService";
import CustomFormInput from "../../CustomComponents/CustomFormInput";
import "../Signup/Signup.css";

const initialData = {
  email: "",
  password: "",
};

const SignUp = () => {
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

  const handleSignupBtn = () => {
    setLoading(true);
    dispatch(
      AuthService.SignUp({
        email: signupData.email,
        password: signupData.password,
      })
    );
    setSignupData(initialData);
  };

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <div className="signup-wrapper">
      <div className="signup-form-wrapper">
        <h1>SignUp</h1>
        <label style={{ marginRight: "13rem" }} className="input-label">
          Email
        </label>
        <CustomFormInput
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleOnChange}
          className="signup-form-input"
        />
        <label className="input-label">Password</label>
        <CustomFormInput
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleOnChange}
          className="signup-form-input"
        />
        <button
          className="signup-form-btn"
          type="button"
          onClick={handleSignupBtn}
        >
          {loading ? (
            <ImSpinner6 icon="spinner" className="spinner" />
          ) : (
            "SignUp"
          )}
        </button>
        <span style={{ marginTop: "1.5rem" }}>
          Already Our Member? &nbsp;
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
