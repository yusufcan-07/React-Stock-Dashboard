import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
function Header({ ticker }) {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{ticker}</h1>
        <Search />
      </div>
      <ThemeIcon />
    </>
  );
}

export default Header;
