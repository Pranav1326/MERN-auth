import axios from 'axios';

import { useState } from 'react';
import './styles.css';

const Login = ({ setIsRegistrated }) => {

  const [ loginDetails, setLoginDetails ] = useState({
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest();
  }
  
  const handleChanges = e => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  }
  
  const handleRegsiterRoute = () => {
    setIsRegistrated(false);
  }
  
  const loginRequest = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/auth/login`, {
        email: loginDetails.email,
        password: loginDetails.password
      });
      console.log(res.data);
      sessionStorage.setItem("act", res.data.accessToken);
      sessionStorage.setItem("rft", res.data.refreshToken);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="login-main">
      <div className="login-box">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="username-box">
            <input type="email" name="email" value={loginDetails.email} onChange={handleChanges} placeholder='Email'  id="email" required />
          </div>
          <div className="password-box">
            <input type="password" name="password" value={loginDetails.password} onChange={handleChanges} placeholder='Password'  id="password" required />
          </div>
          <button type="submit">Login</button>
          <p className='register-route-click' onClick={handleRegsiterRoute}>New here?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;