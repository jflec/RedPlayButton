import React from 'react';
import SigninButton from './signin_button';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser, logout } = props;

  return (
    <div className="navbar">
      <NavLink exact to="/">
        <span>RedPlayButton</span>
      </NavLink>
      <Search />
      {currentUser ? (
        <button onClick={logout} className="auth-button">
          <p>SIGN OUT</p>
        </button>
      ) : (
        <div></div>
      )}
      {currentUser ? <p className="profile-picture">Joe</p> : <SigninButton />}
    </div>
  );
}

export default Navbar;
