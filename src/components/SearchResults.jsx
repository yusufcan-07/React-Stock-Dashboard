import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  /*constant atamada böyle yapılıyor ilerde lazım olursa iki türlü birleştirme de var*/
  const HOVER_BACKGROUND_COLOR = darkMode
    ? "hover:bg-green-600"
    : "hover:bg-green-500";
  const CUSTOM_RESULT_STYLE = `cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${HOVER_BACKGROUND_COLOR}`;

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll   ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar "
      }`}
    >
      {results.map((item) => {
        return (
          <li key={item.symbol} className={CUSTOM_RESULT_STYLE}>
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
