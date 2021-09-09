import React from 'react';
import { NavLink } from 'react-router-dom';

function SigninButton() {
  return (
    <NavLink to="/login">
      <button className="index-sign-in">
        <p>SIGN IN</p>
      </button>
    </NavLink>
  );
}

export default SigninButton;
