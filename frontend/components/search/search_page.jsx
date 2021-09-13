import React, { useState, useEffect } from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Sidebar from '../sidebar';
import VideoRowsContainer from '../videos/video_rows_container';

function SearchPage(props) {
  const query = props.location.search.split('=')[1];
  document.title = `${query} - RedPlayButton`;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    props.searchVideos(query);
  }, []);

  useEffect(() => {
    setReady(true);
  }, [props.videos]);

  if (ready) {
    return (
      <div className="fake-background">
        <div className="feed-content">
          <NavbarContainer />
          <Sidebar />
          <VideoRowsContainer searching={true} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="fake-background">
        <div className="feed-content">
          <NavbarContainer />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default SearchPage;
