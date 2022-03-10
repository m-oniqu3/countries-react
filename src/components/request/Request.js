import React, { useState, useEffect } from "react";

const Request = ({ sendResults }) => {
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    if (countries) {
      sendResults(countries);
    }
  }, [countries, sendResults]);

  return <div></div>;
};

export default Request;
