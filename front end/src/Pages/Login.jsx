import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/LoginSignup.css';
import Navbar from '../Components/Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/login', {
        email,
        password,
      });
      console.log(response.data);
      navigate('/shop');
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data);
    }
  };

  return (
    <>
     <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
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
        <p className="loginsignup-login">Don't have an Account?
          <span>
            <Link to="/signup"> Sign Up Here </Link>
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of privacy policy.</p>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Login;
