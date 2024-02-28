import React from "react";
import Search from "./Search";

function Header({searchText, onSearchText}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchText={searchText} onSearchText={onSearchText}/>
    </header>
  );
}

export default Header;
