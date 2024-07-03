import axios from "axios";

import { useState } from "react";

const Register = ({ setIsRegistrated }) => {

  const [ registerDetails, setRegisterDetails ] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    registerRequest();
  }
  
  const handleChanges = e => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  }
  
  const handleRegsiterRoute = () => {
    setIsRegistrated(true);
  }

  const registerRequest = async () => {
    const res = await axios.post(`http://localhost:8000/auth/register`, {
      username: registerDetails.username,
      email: registerDetails.email,
      password: registerDetails.password
    });
    console.log(res.data);
  }
  
  return (
   <div className="login-main">
      <div className="login-box">
        <h1>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="username-box">
            <input type="text" name="username" value={registerDetails.username} onChange={handleChanges} placeholder='Username'  id="username" required />
          </div>
          <div className="email-box">
            <input type="email" name="email" value={registerDetails.email} onChange={handleChanges} placeholder='Email'  id="email" required />
          </div>
          <div className="password-box">
            <input type="password" name="password" value={registerDetails.password} onChange={handleChanges} placeholder='Password'  id="password" required />
          </div>
          <button type="submit">Register</button>
          <p className='register-route-click' onClick={handleRegsiterRoute}>Already a user?</p>
        </form>
      </div>
    </div>
  )
}

export default Register;