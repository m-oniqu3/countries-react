import React, { useState, useEffect } from "react";

const Request = ({ sendResults, search }) => {
  //State
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  /**
   * async function to the fetch all the countries from the url when the component is first rendered
   * limit the requests by checking of the fetched data is already in LS
   * if LS is not empty then set the state to the data in LS
   * if no data in LS then make the request and store the data in ls as a string
   */
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

  /**
   
   * if there is no user input and results for all the countries is not empty send it to the app component
   * this determines what the countriesList/country component will display
   */
  useEffect(() => {
    if (countries.length !== 0 && search === "") {
      sendResults(countries);
    }
  }, [countries, sendResults, search]);

  return <div></div>;
};

export default Request;
