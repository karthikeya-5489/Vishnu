// RadioForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './RadioForm.css';

const RadioForm = () => {
  const [radioOption, setRadioOption] = useState('');

  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/savesemisters', { radioOption });
      console.log('Data sent and saved successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  const logOut=()=>{
    window.localStorage.clear();
    window.location.href="./"
  }

  return (
    <div>          
      <button onClick={logOut} className="logout-button">Logout</button>
    
    <form onSubmit={handleFormSubmit}>
      <label>
        <input
        className='radio-input'
          type="radio"
          name="radioOption"
          value="Option 1"
          checked={radioOption === 'Option 1'}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <label>
        <input
        className='radio-input'
          type="radio"
          name="radioOption"
          value="Option 2"
          checked={radioOption === 'Option 2'}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
export default RadioForm;




