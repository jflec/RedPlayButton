import React from 'react';
import SigninButton from './signin_button';
import SearchContainer from '../search/search_container';
import { NavLink } from 'react-router-dom';
import UploadContainer from '../upload/upload_container';
import UserIconContainer from './user_icon_container';

function Navbar(props) {
  const { currentUser } = props;

  return (
    <div className="navbar">
      <div className="sidebar-open">
        <svg
          viewBox="0 0 24 24"
          className="hamburger down"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
        </svg>
        <div className="sidebar-black-screen"></div>
      </div>
      <NavLink exact to="/">
        <img className="logo" src={window.maybelogo} />
      </NavLink>
      <SearchContainer />
      {currentUser ? <UserIconContainer /> : <SigninButton />}
      <UploadContainer />
    </div>
  );
}

export default Navbar;
