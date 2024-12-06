components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="text-primary">LOCAL GLOBE</h1>
        <nav>
          <a href="#" className="mx-2">Home</a>
          <a href="#" className="mx-2">About Us</a>
          <a href="#" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;