import { useRef } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(passwordAgain.current.value, password.current.value);
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords are don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("http://localhost:5000/api/auth/signup", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
    console.log("clicked");
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <form className="registerBox" onSubmit={handleClick}>
          <input
            placeholder="Username"
            type="text"
            required
            className="registerInput"
            ref={username}
          />
          <input
            placeholder="Email"
            type="email"
            required
            className="registerInput"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength="6"
            className="registerInput"
            ref={password}
          />
          <input
            placeholder="Password Again"
            type="password"
            required
            minLength="6"
            className="registerInput"
            ref={passwordAgain}
          />
          <button className="registerButton" type="submit">
            Sign Up
          </button>
          <span className="registerForgot">Forgot Password?</span>
          <button className="registerRegisterButton">Log into Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
