import React from "react";

function Search({searchText, onSearchText}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchText("submitted");
  }

  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={onSearchText}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
