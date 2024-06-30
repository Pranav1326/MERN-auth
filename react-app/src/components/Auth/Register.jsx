import { useState } from "react";

const Register = ({ setIsRegistrated }) => {

  const [ registerDetails, setRegisterDetails ] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  }
  
  const handleChanges = e => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  }
  
  const handleRegsiterRoute = () => {
    setIsRegistrated(true);
  }

  return (
   <div className="login-main">
      <div className="login-box">
        <h1>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="username-box">
            <input type="text" name="username" value={registerDetails.username} onChange={handleChanges} placeholder='Username'  id="username" />
          </div>
          <div className="email-box">
            <input type="text" name="email" value={registerDetails.email} onChange={handleChanges} placeholder='Email'  id="email" />
          </div>
          <div className="password-box">
            <input type="password" name="password" value={registerDetails.password} onChange={handleChanges} placeholder='Password'  id="password" />
          </div>
          <button type="submit">Register</button>
          <p className='register-route-click' onClick={handleRegsiterRoute}>Already a user?</p>
        </form>
      </div>
    </div>
  )
}

export default Register;