import React, { useEffect, useState } from "react";

const RegionRequest = ({ selectedRegion, allCountries, sendFilteredData }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  console.log(selectedRegion);
  const url = `https://restcountries.com/v3.1/region/${selectedRegion}`;

  useEffect(() => {
    const filterRegion = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredResults(data);
    };
    if (selectedRegion !== "All") {
      filterRegion();
    }
  }, [url, selectedRegion]);

  useEffect(() => {
    if (selectedRegion === "All") {
      sendFilteredData(allCountries);
    } else {
      sendFilteredData(filteredResults);
    }
  }, [allCountries, filteredResults, selectedRegion, sendFilteredData]);
  console.log(filteredResults);
  return <div></div>;
};

export default RegionRequest;
