import React from "react";
import { countries } from "./countryCodes";
import "./countryMenu.css";

export default function CountryMenu() {
  const keys = Object.keys(countries);
  console.log(keys);
  const countryList = keys.map((country) => {
    return <li>{country}</li>;
  });
  return <div class="countries-container">{countryList}</div>;
}
