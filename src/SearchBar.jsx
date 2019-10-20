import React from 'react';

const SearchBar = ({ onChange }) => (
  <div className="inputWrapper">
    <label htmlFor="searchActor">Add or Remove Actors</label>
    <input
      id="searchActor"
      className="searchInputBar"
      placeholder=""
      type="text"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
