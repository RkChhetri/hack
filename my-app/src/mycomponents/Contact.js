import React, { useEffect } from "react";
import "./Contact.css";
import home1 from "./pictures/contact.webp";

export default function Contact() {
  useEffect(() => {
    // Set background styling on component mount
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.background = `url(${home1}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";

    // Reset body styles on component unmount
    return () => {
      document.body.style = "";
    };
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h3 className="text-center">Contact Us</h3>
        <hr />
        <form>
          <label htmlFor="txt_Fullname">Name:</label>
          <input
            type="text"
            id="txt_Fullname"
            placeholder="Enter your name"
            className="form-control"
          />
          <label htmlFor="txt_Email">Email:</label>
          <input
            type="email"
            id="txt_Email"
            placeholder="Enter your email"
            className="form-control"
          />
          <label htmlFor="txt_Description">Description:</label>
          <textarea
            id="txt_Description"
            placeholder="Enter your message"
            className="form-control"
            rows="4"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
