import React from "react";

import './SearchBar.css'

export default function SearchBar(props) {
  const { searchValue, handlerOnChange } = props;
  return (
    <div>
      <form action="">
        <label htmlFor="search">
          Search
          <input
            type="text"
            value={searchValue}
            onChange={handlerOnChange}
            name="search"
          />
        </label>
      </form>
    </div>
  );
}
