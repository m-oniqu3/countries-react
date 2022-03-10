import React, { useState, useEffect } from "react";

const CountriesList = ({ listOfCountries }) => {
  console.log(listOfCountries);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (listOfCountries.length === 0) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [listOfCountries]);
  return <div>{load ? <p>loading..</p> : <p>got the data</p>}</div>;
};

export default CountriesList;
