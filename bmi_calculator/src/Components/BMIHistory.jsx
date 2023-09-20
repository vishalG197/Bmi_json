// src/components/BMI/BMIHistory.js
import React, { useState, useEffect } from 'react';
import './BMIHistory.css'; // Import the CSS file for styling
import { useAuth } from '../Routes/AuthContext';

function BMIHistory() {
  const [bmiHistory, setBMIHistory] = useState([]);
  const { isAuth, userData, login, logout } = useAuth();
  useEffect(() => {
    
    
    fetch ("https://bmi-api-wfcz.onrender.com/bmiHistory").then((res)=>res.json()).then((data) => {
       console.log(data,userData)
      data=data.filter((data) => data.userId == userData.id)
      setBMIHistory(data);
       
       }).catch((error) => {
       console.log(error.message);
   });
   
  }, []);

  return (
    <div className="bmi-history-container">
      <h2>BMI History</h2>
      {bmiHistory.length === 0 ? (
        <p>No BMI records found.</p>
      ) : (
        <table className="bmi-history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>BMI</th>
            </tr>
          </thead>
          <tbody>
            {bmiHistory.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.bmi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BMIHistory;
