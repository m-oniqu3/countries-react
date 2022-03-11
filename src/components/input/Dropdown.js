import React from "react";
import styled from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <section className={styled.dropdown}>
      <select className={styled.menu}>
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
    </section>
  );
};

export default Dropdown;
