import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
      alert("User registered successfully");
      navigate('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          <input 
            type="text" 
            placeholder='Your Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder='Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Already have an Account?<span>
            <Link to="/login"> Login </Link>
          </span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
