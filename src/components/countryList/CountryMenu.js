import React from "react";
import { countries } from "./countryCodes";
import "./countryMenu.css";

export default function CountryMenu(props) {
  const keys = Object.keys(countries);
  console.log(keys);
  const countryList = keys.map((country) => {
    return (
      <div key={country} onClick={() => props.setLocation(country)}>
        {country}
      </div>
    );
  });
  return <div class="countries-container">{countryList}</div>;
}
