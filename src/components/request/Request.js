import React, { useState, useEffect } from "react";

const Request = ({ sendResults, search }) => {
  //State
  const [countries, setCountries] = useState([]);
  const [place, setPlace] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  const namedurl = `https://restcountries.com/v3.1/name/${search}`;

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
   * function to fetch data with the user's search input
   * called the function after 600ms if the input is not empty
   * used the timer to reduce the number of requests
   * clear the timer in cleanup
   */
  useEffect(() => {
    const getPlace = async () => {
      try {
        const response = await fetch(`${namedurl}`);
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        console.error(error);
      }
    };

    const timer = setTimeout(() => {
      search !== "" && getPlace();
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [namedurl, search]);

  /**
   * if there is a user input and there are results, send it to the app component
   * if there is no user input and results for all the countries is not empty send it to the app component
   * this determines what the countriesList/country component will display
   */
  useEffect(() => {
    if (search !== "" && place.length !== 0) {
      sendResults(place);
    }
    if (countries.length !== 0 && search === "") {
      sendResults(countries);
    }
  }, [countries, sendResults, place, search]);

  return <div></div>;
};

export default Request;
