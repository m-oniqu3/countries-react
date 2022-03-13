import React, { useEffect, useState } from "react";
import styled from "./Dropdown.module.css";

const Dropdown = ({ sendContinent }) => {
  const [region, setRegion] = useState("All");

  //Set the state with the value the user clicked
  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  //Send the region to the parent component everytime the data changes
  useEffect(() => {
    sendContinent(region);
  }, [sendContinent, region]);

  return (
    <section className={styled.dropdown}>
      <select onChange={handleRegion} value={region} className={styled.menu}>
        <option value="Filter by Region" hidden>
          Filter by Region
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Dropdown;
