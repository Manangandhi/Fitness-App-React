import { loginSuccess, signupSuccess } from "../store/actions/authActions";
import axios from "axios";

class AuthService {
  static SignUp = (data = {}) => {
    return (dispatch) => {
      if (!data?.email || !data?.password) {
        return;
      }
      const { email, password } = data;
      axios
        .post("http://localhost:5000/user/signup", { email, password })
        .then((res) => {
          dispatch(signupSuccess(res.data));
        })
        .catch(() => {
          console.log("Error Logging in!");
        });
    };
  };

  static Login = (data = {}) => {
    return (dispatch) => {
      if (!data?.email || !data?.password) {
        return;
      }
      const { email, password } = data;
      axios
        .post("http://localhost:5000/user/login", { email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
        })
        .catch(() => {
          console.log("Error Logging in!");
        });
    };
  };
}

export default AuthService;
