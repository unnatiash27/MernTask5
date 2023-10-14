import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AgeCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (selectedDate) {
      const birthDate = new Date(selectedDate);
      const currentDate = new Date();
      const ageDiff = currentDate - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Age Calculator</h1>
      <p>Enter your date of birth:</p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <button onClick={calculateAge} style={{ backgroundColor: 'skyblue', borderRadius: '20px', padding: '10px 20px', marginTop: '20px' }}>
        Calculate Age
      </button>
      {age !== null && (
        <p style={{ marginTop: '20px' }}>You are {age} years old</p>
      )}
    </div>
  );
};

export default AgeCalculator;
