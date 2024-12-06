import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img
          src="header-image.jpg"
          alt="Header"
        />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
