import React, { useEffect } from "react";
import home1 from './pictures/home1.jpeg';
import './SignupPage.css';
export default function Signup() {
  useEffect(() => {
    // Apply body styles for Login page
   
   



    // Cleanup on unmount
    return () => {
      document.body.style = "";
    };
  }, []);
  return (
    <div className="signup-container " style={{ backgroundImage: `url(${home1})`,}}>
    <div className="signup-card">
      <h2 className="text-center">Sign Up</h2>
      <form>
        {/* Shop Name */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-shop"></i>
          </span>
          <input
            type="text"
            className="form-control " id="input-box"
            placeholder="Business Name"
            required
          />
        </div>

        {/* Owner Name */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="text" id="input-box"
            className="form-control"
            placeholder="Business Owner "
            required
          />
        </div>

        {/* Email Address */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            className="form-control" id="input-box"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-telephone"></i>
          </span>
          <input
            type="text"
            className="form-control" id="input-box"
            placeholder="Contact Number"
            required
          />
        </div>

        {/* Password */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <input
            type="password"
            className="form-control" id="input-box"
            placeholder="Password"
            required
          />
        </div>

        {/* PAN Number */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-credit-card"></i>
          </span>
          <input
            type="text"
            className="form-control" id="input-box"
            placeholder="PAN Number"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 rounded-pill">
          Sign Up
        </button>
      </form>

      {/* Footer Links */}
      <div className="text-center mt-3">
        <p className="mb-1">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  </div>
  );
}
