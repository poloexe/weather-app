import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  const onWrite = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    handleSearch(search);
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div className="input-group" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter City Name"
          value={search}
          onChange={onWrite}
        />
        <button className="btn btn-dark" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
