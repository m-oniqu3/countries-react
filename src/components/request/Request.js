import React, { useState, useEffect } from "react";

const Request = ({ sendResults, search }) => {
  const [countries, setCountries] = useState([]);
  const [place, setPlace] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  const namedurl = `https://restcountries.com/v3.1/name/${search}`;

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

  console.log(place);
  //* if countries has data then send it to the app component
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
