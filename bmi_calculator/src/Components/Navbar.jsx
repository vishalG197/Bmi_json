
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BMI Calculator
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/bmi-calculator" className="navbar-link">
              Calculate BMI
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/bmi-history" className="navbar-link">
              BMI History
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">
              Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/registration" className="navbar-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
