import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divs_array = new Array(30);
    for (let i = 0; i < divs_array.length; i++) {
      divs_array[i] = new Array(3);
    }
    return (
      <div className="video-index">
        {divs_array.map((e, i) => (
          <NavLink
            to={`/watch/${i}`}
            className={`video-index-item`}
            key={i}
          ></NavLink>
        ))}
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);
