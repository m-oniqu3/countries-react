import React, { useState, useEffect } from "react";

const SearchRequest = ({ search, sendUserResults }) => {
  const [place, setPlace] = useState([]);
  const namedurl = `https://restcountries.com/v3.1/name/${search}`;

  /**
   * function to fetch data with the user's search input
   * called the function after 500ms if the input is not empty
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
    }, 500);

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
      sendUserResults(place);
    }
  }, [sendUserResults, place, search]);
  return <div></div>;
};

export default SearchRequest;
