import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 
import home1 from './pictures/home1.jpg';
import home2 from './pictures/home2.webp';
import home3 from './pictures/home3.jpg';
import loginbg from './pictures/loginbg.jpg';


const Login = () => {
  useEffect(() => {
    // Apply body styles for Login page
 
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.background = `url(${ loginbg}) no-repeat center`;
    document.body.style.backgroundSize = "cover";


    // Cleanup on unmount
    return () => {
      document.body.style = "";
    };
  }, []);
  return (
    <div className="container " style={{ 
      justifyContent: "center",
      display:"flex",
      alignItems:"center"

    }}>
    <div className="wrapper">
      <form action="#">
        <h1>Login</h1>
        {/* Username Input */}
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        {/* Password Input */}
        <div className="input-box">
          <input type="password" placeholder="Password" required />
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
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        {/* Register Link */}
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
