// src/components/Profile/UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css'; // Import the CSS file for styling

function UserProfile() {
  const [name, setName] = useState('John Doe'); // Replace with user's name from your data
  const [email, setEmail] = useState('johndoe@example.com'); // Replace with user's email from your data
  const [password, setPassword] = useState('********'); // Replace with user's password from your data (masked)

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Implement profile update logic here (e.g., API request to update user information)
    // You can access 'name', 'email', and 'password' state variables to send to the server
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <form className="user-profile-form" onSubmit={handleUpdateProfile}>
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
        <button type="submit" className="update-profile-button">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
