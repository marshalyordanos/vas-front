import React from "react";
import CountryFlag from "react-country-flag";

const flags = {
  EN: (
    <CountryFlag countryCode="US" svg style={{ width: "3em", height: "3em" }} />
  ),
  ET: (
    <CountryFlag countryCode="ET" svg style={{ width: "3em", height: "3em" }} />
  ),
  ES: (
    <CountryFlag countryCode="ES" svg style={{ width: "3em", height: "3em" }} />
  ),
};

export default flags;
