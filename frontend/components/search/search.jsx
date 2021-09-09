import React from 'react';

export default function Search() {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onfocus="this.placeholder = ''"
        className="search-input"
      />
      <button className="search-button">Search</button>
    </form>
  );
}
