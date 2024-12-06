// src/components/Contact.js
import React from "react";
import './Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Contact = () => {
  return (
    <div className="container mt-5">
      {/* Title Section */}
      <h2 className="text-center mb-4 text-primary">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Contact Form */}
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
