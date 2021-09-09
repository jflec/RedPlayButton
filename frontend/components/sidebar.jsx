import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list">
        <li>
          <span className="list-item">Home</span>
        </li>
        <li>
          <span className="list-item">Explore</span>
        </li>
        <li>
          <span className="list-item">Subscriptions</span>
        </li>
        <li>
          <span className="list-item">Library</span>
        </li>
        <li>
          <span className="list-item">History</span>
        </li>
      </ul>
    </div>
  );
}
