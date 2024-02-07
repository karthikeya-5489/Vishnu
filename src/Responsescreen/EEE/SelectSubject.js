import React, { useState } from "react";
// import { functionInResponseScreen } from '../Responsescreen'; // Importing the function
import { functionInResponseScreen } from '../Responsescreen'; // Importing the function from Responsescreen.js


const SelectSubject = () => {
  
  functionInResponseScreen();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [userResponse, setUserResponse] = useState({
    input1: '',
    input2: '',
    input3:'',
    input4:'',
    input5:'',
    input6:'',
    input7:'',
    input8:'',
    input9:'',
    input10:'',

  });
  const handleSelectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleInputChange = (inputName, value) => {
    setUserResponse((prevuserResponse) => ({
      ...prevuserResponse,
      [inputName]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // You need to send the selectedSubject and userResponse in the request body
      // await axios.post("http://localhost:3000/api/savesemisters", {selectedSubject, userResponse });
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "selectedSubject": selectedSubject,
        "userResponse":  JSON.stringify(userResponse)
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/savesemisters", requestOptions)
  .then(response => {
    console.log(response.status); // Log the status code
    return response.text();
  })
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));

      console.log("Data sent and saved successfully");
      console.log(`User selected ${selectedSubject} and entered response: ${userResponse.input1}`);
      console.log(`User selected ${selectedSubject} and entered response: ${userResponse.input2}`);

      // Reset state if needed
      setSelectedSubject("");
      setUserResponse("");
    } catch (error) {
      console.error("Error sending data:", error);
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
        <label className="label">
          Select your Subject:
          <select value={selectedSubject} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="M1">M1</option>
            <option value="English">English</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Eca">Eca</option>
          </select>
        </label>
        {selectedSubject && (
          <div >
            <h2>Selected Option: {selectedSubject}</h2>
            {/* Display a question based on the selected option */}
            {selectedSubject === "M1" && (
              <>
                <p>What is your favorite color?</p>
                <input
                  type="text"
                  value={userResponse.input1}
                  onChange={(e) => handleInputChange('input1', e.target.value)}
                />
              </>
            )}
            {selectedSubject === "English" && (
              <>
                <p>How do you like to spend your weekends?</p>
                <input
                  type="text"
                  value={userResponse.input2}
                  onChange={(e) => handleInputChange('input2', e.target.value)}
                />
                <p>What is your name?</p>
              <input
                type="text"
                value={userResponse.input3}
                onChange={(e) => handleInputChange('input3', e.target.value)}
                />
              </>
            )}
            {selectedSubject === "Physics" && (
              <>
                <p>What is your preferred programming language?</p>
                <input
                  type="text"
                  value={userResponse.input4}
                  onChange={(e) => handleInputChange('input4', e.target.value)}
                  />
              </>
            )}
            {selectedSubject === "Chemistry" && (
              <>
                <p>What is your age?</p>
                <input
                  type="text"
                  value={userResponse.input5}
                  onChange={(e) => handleInputChange('input5', e.target.value)}
                  />
              </>
            )}
            {selectedSubject === "Eca" && (
              <>
                <p>What is your collage?</p>
                <input
                  type="text"
                  value={userResponse.input6}
                  onChange={(e) => handleInputChange('input6', e.target.value)}
                  />
                
              </>
            )}
            <button type="submit" >Submit Response</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SelectSubject;
