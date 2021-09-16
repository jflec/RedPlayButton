import React from 'react';
import { NavLink } from 'react-router-dom';

class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);
  }

  toggle() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  display(logout, currentUser) {
    return (
      <div className="user-icon-dropdown-content">
        <NavLink exact to={`/c/${currentUser.username}`}>
          <div className="user-display">
            {currentUser.profile_picture_url ? (
              <img
                className="user-icon-medium"
                src={currentUser.profile_picture_url}
              ></img>
            ) : (
              <img className="user-icon-medium" src={window.defaultPFP} />
            )}
            <div className="user-info">
              <h1>{currentUser.username}</h1>
              <p>Manage Account</p>
            </div>
          </div>
        </NavLink>
        <NavLink exact to={`/c/${currentUser.username}`}>
          <div className="channel-div">
            <svg
              viewBox="0 0 24 24"
              className="channel-icon"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path
                d=" M3,3v18h18V3H3z
          M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z
          M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z
          M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4
          c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
              ></path>
            </svg>

            <p>Your channel</p>
          </div>
        </NavLink>
        <div className="user-signout" onClick={logout}>
          <svg
            viewBox="0 0 24 24"
            className="user-signout-icon"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"></path>
          </svg>
          <p>Sign out</p>
        </div>
        <div className="github-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="github-logo"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <a href="https://github.com/JFlec">GitHub</a>
        </div>
      </div>
    );
  }

  render() {
    const { logout, currentUser } = this.props;
    return (
      <button className="user-icon-container">
        <div className="user-icon-dropdown" onClick={this.toggle}>
          {currentUser.profile_picture_url ? (
            <img
              className="user-icon"
              src={currentUser.profile_picture_url}
            ></img>
          ) : (
            <img className="user-icon" src={window.defaultPFP} />
          )}
          {!this.state.hidden ? this.display(logout, currentUser) : ''}
        </div>
      </button>
    );
  }
}

export default UserIcon;
