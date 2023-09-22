import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './LoginForm.css'; 

function Logger() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your Spring Boot backend for authentication
    axios
      .post('http://localhost:8080/api/user/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          const user = response.data;
          // Authentication successful, you can redirect or set an authenticated state
          localStorage.setItem('user', JSON.stringify(user));
         navigate("/home");
        } else {
          // Authentication failed
          console.log('Authentication failed');
        }
      })
      .catch((error) => {
        // Handle any errors here, e.g., network errors, server errors, etc.
        console.error('Error:', error);
        if (error.response && error.response.status === 401) {
            // Display a message to the user that the authentication failed
            alert('Authentication failed. Please check your username and password and try again.');
          }
      });
  };

  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
          <button type="submit">Login</button>
      
      </form>
    </div>
  
  );
}

export default Logger;