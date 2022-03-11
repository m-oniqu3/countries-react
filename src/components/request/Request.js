import React, { useState, useEffect } from "react";

const Request = ({ sendResults, search }) => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  console.log(search);
  //* async funtion to the fetch all the countries from the url
  useEffect(() => {
    const getCountries = async () => {
      try {
        const items = localStorage.getItem("countries");
        if (items) {
          setCountries(JSON.parse(items));
        } else {
          const response = await fetch(`${url}`);
          const data = await response.json();
          localStorage.setItem("countries", JSON.stringify(data));
          setCountries(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  //* if countries has data then send it to the app component
  useEffect(() => {
    if (countries.length !== 0) {
      sendResults(countries);
    }
  }, [countries, sendResults]);

  return <div></div>;
};

export default Request;
