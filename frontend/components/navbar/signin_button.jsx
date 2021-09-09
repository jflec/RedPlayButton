import React from 'react';
import { NavLink } from 'react-router-dom';

function SigninButton() {
  return (
    <NavLink to="/login">
      <button className="auth-button">
        <p>SIGN IN</p>
      </button>
    </NavLink>
  );
}

export default SigninButton;
