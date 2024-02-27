import React from 'react';
import './Sign.css'; // Import the CSS file

const SignUp = () => {
  return (
    <div>
      <div className="signUpContainer">
        <div className="leftText"><h3>Sign up and get exclusive special deals</h3></div>
        <div className="inputContainer">
          <input type="text" className="inputField" />
          <button className="submitButton">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
