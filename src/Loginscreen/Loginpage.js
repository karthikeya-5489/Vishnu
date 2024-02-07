// LoginPage.js
import React, { useState } from "react";
import "./Loginpage.css";
import axios from 'axios';
import {NavLink,useNavigate,Link} from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate(); // Move useNavigate here

    const handleLogin = async () => {
      try {
    
        const response = await axios.post('http://localhost:3000/login', {username, password });
    
        if (response.status === 200) {
          // const token = response.data.token;
          const token = Math.random();
          // document.cookie = `authToken=${token}; path=/`;
          localStorage.setItem(username, token);
          const storedToken = localStorage.getItem('token');
          console.log(storedToken);
          console.log('Login successful');
          setLoginMessage('Login successful');
          navigate('/Responsescreen'); 
        } else {
          console.error('Authentication failed');
          setLoginMessage('Authentication failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

  return (
    <div>
    <div className="top-page">
      <img className="image" src="https://vishnu.edu.in/images/logobig.jpg"/>
      <p className="text">Vishnu response</p>
      </div>  
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <nav>
            <NavLink path="/Responsescreen">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          </NavLink>
          </nav>
        </form>

        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
      <div className="bottom-page">
        For help! <a href="/contact">Contact us</a>
      </div>
    </div>
  );
};

export default LoginPage;
