// src/components/common/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} BMI Calculator App
        </p>
      </div>
    </footer>
  );
}

export default Footer;
