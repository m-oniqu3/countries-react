import React from "react";

const Dropdown = () => {
  return (
    <select>
      <option selected hidden>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Dropdown;
