import React from 'react';

const SearchBar = ({ onChange }) => (
  <div id="inputWrapper">
    <input
      placeholder=""
      type="text"
      id="filter"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      onChange={onChange}
    />
    <div id="exitSearchButton" />
  </div>
);

export default SearchBar;
