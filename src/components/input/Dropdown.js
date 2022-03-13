import React, { useEffect, useState } from "react";
import styled from "./Dropdown.module.css";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    const nav = () => {
      region !== "" && navigate(`filter/${region}`);
    };

    nav();
  }, [region, navigate]);

  return (
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
  );
};

export default Dropdown;
