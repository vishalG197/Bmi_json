// src/components/BMI/BMICalculator.js
import React, { useState } from 'react';
import './BMICalculator.css'; // Import the CSS file for styling
import { useAuth } from '../Routes/AuthContext';

function BMICalculator() {
  const [heightFeet, setHeightFeet] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [bmi, setBMI] = useState(null);
  const { isAuth, userData, login, logout } = useAuth();
  const calculateBMI = () => {
    if (heightFeet && weightKg) {
      // Convert height from feet to meters (1 foot = 0.3048 meters)
      const heightMeters = heightFeet * 0.3048;

      // Calculate BMI using the formula: BMI = weight (kg) / [height (m)]^2
      const bmiValue = (weightKg / (heightMeters * heightMeters)).toFixed(2);
      setBMI(bmiValue);
      const bmiData = {
         userId:userData.id,
         date: new Date().toISOString(), // Use the current date as an example
         bmi: parseFloat(bmiValue),
       };
       console.log(bmiData);
       fetch ("https://bmi-api-wfcz.onrender.com/bmiHistory",{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(bmiData),
      }).then((response) => {
         // console.log(response.json());
         
         }).catch((error) => {
         console.log(error.message);
     });

    }
  };

  return (
    <div className="bmi-calculator-container">
      <h2>BMI Calculator</h2>
      <div className="bmi-inputs">
        <div className="form-group">
          <label htmlFor="heightFeet">Height (in feet):</label>
          <input
            type="number"
            id="heightFeet"
            name="heightFeet"
            value={heightFeet}
            onChange={(e) => setHeightFeet(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weightKg">Weight (in kg):</label>
          <input
            type="number"
            id="weightKg"
            name="weightKg"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            required
          />
        </div>
        <button className="calculate-button" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI is: {bmi}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
