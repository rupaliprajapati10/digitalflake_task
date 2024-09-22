
import React, { useState } from 'react';
import './forgetPassword.css';

const ForgetPassword = () => {
    
  

    return(
        <div className="forgetPasswordClass">
            <h2>Did you forget password?</h2>
            <p>Enter your email address and we'll send you a link to restore password</p>
            <div>
            <label>
                Email Address
                <input type="email" />
            </label>
            </div>
            <div>
                <button type='submit'>Request reset link</button>
            </div>
            <div>
                <a href='#'>Back to Log in</a>
            </div>


        </div>

    );

};


export default ForgetPassword;