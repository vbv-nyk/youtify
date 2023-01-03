import React, { useEffect, useState } from "react";
import { countries } from "./countryCodes";
import "./countryMenu.css";

export default function CountryMenu(props) {
  const keys = Object.keys(countries);
  const [inputText, setInputText] = useState("");
  const countryList = keys
    .filter((filteredCountry) =>
      filteredCountry.toLocaleLowerCase().includes(inputText)
    )
    .map((country) => {
      return (
        <div
          className="country-item"
          key={country}
          onClick={() => {
            props.setLocation(country);
            props.setSongSearch("");
            props.setLocationMenu(false);
          }}
        >
          {country}
        </div>
      );
    });

  return (
    <div
      className="countries-list-menu"
      onClick={() => props.setLocationMenu(false)}
    >
      {
        <div className="country-list no-scrollbar">
          <input
            autoFocus
            className="country-input"
            type="text"
            onClickCapture={(e) => e.stopPropagation()}
            placeholder="Search"
            onInput={(e) => setInputText(e.target.value)}
          />
          {countryList}
        </div>
      }
    </div>
  );
}
