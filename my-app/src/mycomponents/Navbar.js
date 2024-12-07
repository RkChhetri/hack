import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState('/');

  // Update the active nav based on the current location
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand disabled"  id="title"href="/">
           {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/' ? 'active' : ''}`}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/Aboutus' ? 'active' : ''}`}
                  to="/Aboutus"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  REGISTER
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeNav === '/userlogin' ? 'active' : ''
                      }`}
                      to="/userlogin"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        activeNav === '/signup' ? 'active' : ''
                      }`}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Others
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Navbar',
};
