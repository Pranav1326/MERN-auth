import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Login = ({ setIsRegistrated }) => {

  const [ loginDetails, setLoginDetails ] = useState({
    username: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  }
  
  const handleChanges = e => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  }
  
  const handleRegsiterRoute = () => {
    setIsRegistrated(false);
  }
  
  return (
    <div className="login-main">
      <div className="login-box">
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="username-box">
            <input type="text" name="username" value={loginDetails.username} onChange={handleChanges} placeholder='Username'  id="username" />
          </div>
          <div className="password-box">
            <input type="password" name="password" value={loginDetails.password} onChange={handleChanges} placeholder='Password'  id="password" />
          </div>
          <button type="submit">Login</button>
          <p className='register-route-click' onClick={handleRegsiterRoute}>New here?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;