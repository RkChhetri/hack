import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css'
export default function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid">
             
        <a className="navbar-brand disabled" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/">HOME</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/Aboutus">ABOUT US</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/contact">CONTACT</Link>
              
            </li>
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                REGISTER
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              
                <li><Link  className="dropdown-item" to="/userlogin">Login</Link></li>
                <li><Link  className="dropdown-item" to="/signup">Signup</Link></li>
                <li><hr className="dropdown-divider"/></li>
    
               
                <li><Link className="dropdown-item" href="/">Something else here</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          
        </div>
      </div>
    </nav>
    

    </div>
  )
}
