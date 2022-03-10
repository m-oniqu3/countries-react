import React, { useState, useEffect } from "react";

const Request = () => {
  /**
     * const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  const GetCountries = async () => {
    const response = await fetch(url);
    const data = response.json();
    setCountries(data);
    console.log(countries);
  };
     */

  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setCountries(data);
      console.log(data);
    };

    getCountries();
  }, []);

  return <div></div>;
};

export default Request;
