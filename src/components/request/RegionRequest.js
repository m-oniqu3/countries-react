import React, { useEffect, useState } from "react";

const RegionRequest = ({ selectedRegion, allCountries, sendFilteredData }) => {
  //State
  const [filteredResults, setFilteredResults] = useState([]);

  const url = `https://restcountries.com/v3.1/region/${selectedRegion}`;

  /**
   * fetch the data with the region the user selected when the selected region changes
   * set the state with the fetched data
   * only call the function if selected region is not equal to "All"
   */
  useEffect(() => {
    const filterRegion = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredResults(data);
    };
    selectedRegion !== "All" && filterRegion();
  }, [url, selectedRegion]);

  /**
   * if selected region === all then return the original lists of countries that was fetched when the component was first rendered (from the request component)
   * if not then send the data that was fetched above , to the app component
   */
  useEffect(() => {
    if (selectedRegion === "All") {
      sendFilteredData(allCountries);
    } else {
      sendFilteredData(filteredResults);
    }
  }, [allCountries, filteredResults, selectedRegion, sendFilteredData]);

  return <div></div>;
};

export default RegionRequest;
