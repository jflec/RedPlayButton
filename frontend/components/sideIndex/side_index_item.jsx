import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class SideIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const divs_array = new Array(30);
    for (let i = 0; i < divs_array.length; i++) {
      divs_array[i] = new Array(3);
    }
    return (
      <div className="side-index">
        {divs_array.map((e, i) => (
          <NavLink
            to={`/watch/${i}`}
            className={`side-index-item`}
            key={i}
          ></NavLink>
        ))}
      </div>
    );
  }
}

export default withRouter(SideIndexItem);
