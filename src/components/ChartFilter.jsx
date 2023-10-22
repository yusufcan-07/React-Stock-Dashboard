import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-20 m-2 h-8 border-1 rounded-full flex items-center justify-center cursor-pointer ${
        active
          ? "bg-black border-black-700 text-white"
          : "bg-white border-#EBEDEE text-black"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
