import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Sidebar from './sidebar';
import SideIndex from './sideIndex/side_index';

export default () => {
  return (
    <div className="videopage">
      <NavbarContainer />
      <div className="video-template"></div>
      <Sidebar />
      <SideIndex />
    </div>
  );
};
