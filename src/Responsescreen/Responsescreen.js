import React from "react";
import './Responsescreen.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Responsescreen=() => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const navigate = useNavigate();

    // const [username, setUsername] = useState('');

  const handleSelectChange = (event) => {
   
    setSelectedValue(event.target.value);
   
  }
  const handleSelectBranch = (event) => {
    setSelectedBranch(event.target.value);
  }

  const handleSubmit=async(event) => {
    event.preventDefault();

try {
  if (selectedValue && selectedBranch) {
    // await axios.post({
    //   url:"http://localhost:3000/api/savesemisters",
    // headers: { 
    //   'Content-Type': 'application/json'
    // },
    // data: { selectedValue, selectedBranch }});
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Semister": selectedValue,
  "Branch": selectedBranch,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/savesemisters", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    console.log('Data sent and saved successfully');

    if (selectedValue === 'I-I' && selectedBranch === 'EEE') {
      navigate('/SelectSubject');
    } else if(selectedValue === 'I-II' && selectedBranch === 'EEE'){
      navigate('/SelectSubject2');
    }
    else if(selectedValue === 'II-I' && selectedBranch === 'EEE'){
      navigate('/SelectSubject3');
    }
    else if(selectedValue === 'II-II' && selectedBranch === 'EEE'){
      navigate('/SelectSubject4');
    }else if(selectedValue === 'III-I' && selectedBranch === 'EEE'){
      navigate('/SelectSubject5');
    }
    else if(selectedValue === 'III-II' && selectedBranch === 'EEE'){
      navigate('/SelectSubject6');
    }
    else if(selectedValue === 'IV-I' && selectedBranch === 'EEE'){
      navigate('/SelectSubject7');
    }
    else if(selectedValue === 'IV-II' && selectedBranch === 'EEE'){
      navigate('/SelectSubject8');
    }
  } else {
    console.error('Semister and Branch must be defined before making the API call.');
  }

} catch (error) {
  console.error('Error sending data:', error);
}

  }
    const logOut=()=>{
      window.localStorage.clear();
      window.location.href="./"
    }
    
      
    return(
        <div>
          <button onClick={logOut} className="logout-button">Logout</button>
            <form onSubmit={handleSubmit}>
              <label className="label">Select your Semister:
                <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="">Select an option</option>
                    <option value="I-I" checked={selectedValue === 'I-I'} onChange={handleSelectChange}>I-I</option>
                    <option value="I-II" checked={selectedValue === 'I-II'} onChange={handleSelectChange}>I-II</option>
                    <option value="II-I" checked={selectedValue === 'II-I'} onChange={handleSelectChange}>II-I</option>
                    <option value="II-II" checked={selectedValue === 'II-II'} onChange={handleSelectChange}>II-II</option>
                    <option value="III-I" checked={selectedValue === 'III-I'} onChange={handleSelectChange}>III-I</option>
                    <option value="III-II" checked={selectedValue === 'III-II'} onChange={handleSelectChange}>III-II</option>
                    <option value="IV-I" checked={selectedValue === 'IV-I'} onChange={handleSelectChange}>IV-I</option>
                    <option value="IV-II" checked={selectedValue === 'IV-II'} onChange={handleSelectChange}>IV-II</option>
                </select>
                </label>
                <label className="label">Select your Branch:
                
                <select value={selectedBranch} onChange={handleSelectBranch}>
                    <option value="">Select an option</option>
                    {/* <option value="CSE" checked={selectedBranch === 'CSE'} onChange={handleSelectBranch}>CSE</option>
                    <option value="IT" checked={selectedBranch === 'IT'} onChange={handleSelectBranch}>IT</option>
                    <option value="AIML" checked={selectedBranch === 'AIML'} onChange={handleSelectBranch}>AIML</option>
                    <option value="AIDS" checked={selectedBranch === 'AIDS'} onChange={handleSelectBranch}>AIDS</option>
                    <option value="CSBS" checked={selectedBranch === 'CSBS'} onChange={handleSelectBranch}>CSBS</option>
                    <option value="ECE" checked={selectedBranch === 'ECE'} onChange={handleSelectBranch}>ECE</option> */}
                    <option value="EEE" checked={selectedBranch === 'EEE'} onChange={handleSelectBranch}>EEE</option>
                    {/* <option value="MECH" checked={selectedBranch === 'MECH'} onChange={handleSelectBranch}>MECH</option> */}
                    {/* <option value="CIV" checked={selectedBranch === 'CIV'} onChange={handleSelectBranch}>CIV</option> */}
                </select>
                </label>
                     <button value="submit"  className="option-button"  >Submit</button> 
            </form>
            
        {/* <RadioForm /> */}
        </div>
    )
}

export default Responsescreen;
export function functionInResponseScreen() {
  // console.log("Function in responsescreen.js");
}