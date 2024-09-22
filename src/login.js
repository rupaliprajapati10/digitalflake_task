
import React, { useState } from 'react';
import './login.css';
import ForgetPassword from './forgetPassword';
import HomePage from './HomePage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'r' && password === '123') {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };


  

  const handleForgetPassword = () => {
    setShowForgetPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgetPassword(false);
  };

  if (showForgetPassword) {
    return <ForgetPassword onBack={handleBackToLogin} />;
  }

  



  return (
    <div className="container">
    
      <form onSubmit={handleSubmit} className='form'>
      <img src='/images/page1_digitalflake.png' alt='page1_digitalflake'/>
      <p>Welcome to DigitalFlake admin</p>
        <div>
          <label>
            Email-id:
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='formUsername'
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='formPassword'
              required
            />
          </label>
        </div>


        <div className='forgetPassword'>
        <a href='#' onClick={handleForgetPassword}>Forget Password?</a>
        </div>


        {error && <div className='error'>{error}</div>}
        <button type="submit" className='loginButton'>Login</button>
      </form>
    
    </div>
  );
};


export default Login;
