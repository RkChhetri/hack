import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 
import loginbg from './pictures/loginbg.jpg';
// import axios from "axios"; 

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Apply body styles for Login page
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.background = `url(${loginbg}) no-repeat center`;
    document.body.style.backgroundSize = "cover";

    // Cleanup on unmount
    return () => {
      document.body.style = "";
    };
  }, []);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);

  const handleLogin = async () => {
    const data = {
      EmailID: Email,
      Password: Password,
    };

    // const url = 'https://localhost:44365/api/Test/login';
    // try {
    //   const result = await axios.post(url, data);
    //   const user = result.data;
    //   if (user.StatusCode === 200) {
    //     navigate('/retailerForm'); // Use navigate function for redirection
    //   } else {
    //     alert(user.StatusMessage);
    //   }
    // } catch (error) {
    //   alert("An error occurred: " + error.message);
    // }
  };

  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          {/* Username Input */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              id="txt_Email"
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          {/* Password Input */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              id="txt_Password"
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          {/* Remember Me and Forget Password */}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
          {/* Register Link */}
          <div className="register-link">
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
