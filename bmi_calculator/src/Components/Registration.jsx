// src/components/Auth/Registration.js
import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file for styling
import {useNavigate} from "react-router-dom"
function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate  =useNavigate()
  const handleRegistration = (e) => {
    e.preventDefault();
   fetch ("https://bmi-api-wfcz.onrender.com/users",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name,email,password}),
   }).then((response) => {
      alert("Registration successful!");
navigate("/login");
      
      }).catch((error) => {
      console.log(error.message);
  });



  }
  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form className="registration-form" onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registration-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
