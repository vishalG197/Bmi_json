// src/components/Auth/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Routes/AuthContext';

function Login() {
   const { isAuth, userData, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate  =useNavigate()
  console.log(isAuth)
  const handleLogin = (e) => {
    e.preventDefault();
    fetch ("https://bmi-api-wfcz.onrender.com/users").then((res)=>res.json()).then((data) => {
     let user=data.filter((el)=>el.email === email&&el.password === password);
     console.log(user,data)
     if(user.length){
    
      login(user[0]);
      alert("Login successful!");
      navigate("/bmi-calculator");
     }else {
      alert("Login failed! check your credentials and try again");
     }
     
      
      }).catch((error) => {
      console.log(error.message);
  });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
