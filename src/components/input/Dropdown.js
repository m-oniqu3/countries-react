import React, { useState } from "react";
import styled from "./Dropdown.module.css";

const Dropdown = () => {
  const [region, setRegion] = useState("");

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

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
