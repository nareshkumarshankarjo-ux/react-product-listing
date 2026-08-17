import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;