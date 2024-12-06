import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Footer.css"; // Optional: Create a CSS file for additional custom styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container d-flex flex-wrap justify-content-between">
        {/* Logo Section */}
        <div className="footer-section logo-section text-left">
          <div className="logo mb-3">
            <img
              src="logo.png"
              alt="Digital Project Logo"
              style={{ maxWidth: "50px" }}
            />
          </div>
          <p>Local Globe</p>
        </div>

        {/* Information Section */}
        <div className="footer-section information text-left">
          <h3>Information</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact text-left">
          <h3>Contacts</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fa fa-map-marker mr-2"></i>Local Globe
            </li>
            <li>
              <i className="fa fa-phone mr-2"></i>+977-9818947469
              <br />+977-9865630777
            </li>
            <li>
              <i className="fa fa-envelope mr-2"></i>
              Teamcoderangers@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media text-left">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a
              href="#"
              className="text-white text-decoration-none mr-3"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-white text-decoration-none mr-3"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white text-decoration-none mr-3"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-white text-decoration-none"
              aria-label="Pinterest"
            >
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-3 border-top pt-3">
        <p>© 2024 All Rights Reserved. [Team Code Rangers]</p>
      </div>
    </footer>
  );
};

export default Footer;
