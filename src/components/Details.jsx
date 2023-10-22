import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);
  const detailList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMilToBil = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailList).map((item) => {
          return (
            <li className="flex-1 flex justify-between items-center" key={item}>
              <span>{detailList[item]}</span>
              <span>
                {item === "marketCapitalization"
                  ? `${convertMilToBil(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
