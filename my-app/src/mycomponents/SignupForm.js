import React from "react";
import "./../styles/SignupPage.css";

const SignupForm = () => {
  return (
    <div className="signup-container">
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
              className="form-control"
              placeholder="Shop Name"
              required
            />
          </div>

          {/* Owner Name */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Owner Name"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
};

export default SignupForm;