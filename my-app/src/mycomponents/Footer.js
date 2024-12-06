import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Footer.css"; // Optional: Create a CSS file for additional custom styles
import logo from "./pictures/logo.webp";


const Footer = () => {
  return (
    <>
   

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p>LOCAL GLOBE</p>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Address: 123 Street, City</li>
            <li><i className="fas fa-phone-alt"></i> Phone: +123 456 789</li>
            <li><i className="fas fa-envelope"></i> Email: info@company.com</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> <i class='bx bxl-facebook-circle'></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i><i class='bx bxl-instagram'></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i><i class='bx bxl-linkedin-square' ></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i><i class='bx bxl-discord-alt' ></i>
              </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 LOGAL GLOBE. All rights reserved.</p>
      </div>
    </footer>
    
  

    </>
  );
};

export default Footer;
