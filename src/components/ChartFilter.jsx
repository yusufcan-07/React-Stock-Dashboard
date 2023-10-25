import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-20 m-2 h-8 border-1 rounded-full flex items-center justify-center cursor-pointer ${
        active
          ? "bg-black border-black-700 text-white"
          : "bg-green-600 border-#EBEDEE text-black"
      }transition duration-200 hover:bg-green-900 hover: text-white hover:border-white`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
