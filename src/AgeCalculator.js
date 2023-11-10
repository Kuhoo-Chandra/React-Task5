import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInYears = today.getFullYear() - birthDate.getFullYear();

    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <p>Enter your date of birth:</p>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className="calculate-button" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>
      {age && (
        <div className="age-output">
          <h4>Your Age:</h4>
          <p>{`Your age is ${age} years`}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;