import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  const onWrite = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-engine">
        <input
          type="text"
          className="city-search"
          placeholder="Enter City Name"
          name="Search"
          value={search}
          onChange={onWrite}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
