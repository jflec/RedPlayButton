import React from 'react';
import SigninButton from './signin_button';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser, logout } = props;

  return (
    <div className="navbar">
      <NavLink exact to="/" className="logo">
        <img className="logo" src={maybelogo}></img>
      </NavLink>
      <Search />
      <div className="user-icon-dropdown-content-links" onClick={logout}>
        SignOut
      </div>
      {currentUser ? <p>pfp</p> : <SigninButton />}
    </div>
  );
}

export default Navbar;
