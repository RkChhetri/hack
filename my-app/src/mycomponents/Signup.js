import React, { useEffect, useState } from "react";
import axios from "axios"; 
import home1 from './pictures/signupog.jpg';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [Busnisessname, setBusnisessname] = useState("");
  const [BusinessOwner, setBusinessOwner] = useState("");
  const [Contactnumber, setContactnumber] = useState("");
  const [EmailID, setEmailID] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  const [Password, setPassword] = useState("");

  const handlePassword = (value) => setPassword(value);
  const handleBusnisessname = (value) => setBusnisessname(value);
  const handleBusinessOwner = (value) => setBusinessOwner(value);
  const handleContactNumber = (value) => setContactnumber(value);
  const handleEmailIDChange = (value) => setEmailID(value);
  const handlePanNumber = (value) => setPanNumber(value);

  const handleSignup = async () => {
    const data = {
      BusinessName: Busnisessname,
      BusinessOwner: BusinessOwner,
      ContactNumber: Contactnumber,
      EmailID: EmailID,
      Password: Password,
      PanNumber: PanNumber,
    };

    const url = "https://localhost:44365/api/Test/Registration_NewEmployee";
    try {
      const result = await axios.post(url, data);
      alert(result.data.StatusMessage);
    } catch (error) {
      alert("An error occurred during sign-up: " + error.message);
    }
  };

  useEffect(() => {
    // Apply body styles for Login page

    // Cleanup on unmount
    return () => {
      document.body.style = "";
    };
  }, []);

  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${home1})` }}
    >
      <div className="signup-card">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Shop Name */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-shop"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="input-box"
              placeholder="Business Name"
              required
              onChange={(e) => handleBusnisessname(e.target.value)}
            />
          </div>

          {/* Owner Name */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              id="input-box"
              className="form-control"
              placeholder="Business Owner"
              onChange={(e) => handleBusinessOwner(e.target.value)}
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
              id="input-box"
              placeholder="Email Address"
              onChange={(e) => handleEmailIDChange(e.target.value)}
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
              id="input-box"
              placeholder="Contact Number"
              required
              onChange={(e) => handleContactNumber(e.target.value)}
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
              id="input-box"
              placeholder="Password"
              required
              onChange={(e) => handlePassword(e.target.value)}
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
              id="input-box"
              placeholder="PAN Number"
              onChange={(e) => handlePanNumber(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSignup}
            className="btn btn-primary w-100 rounded-pill"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-3">
          <p className="mb-1">
            Already have an account? 
            
            <a href="/userlogin">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
