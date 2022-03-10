import React, { useState, useEffect } from "react";
import Loading from "../utility/Loading";

const CountriesList = ({ listOfCountries }) => {
  console.log(listOfCountries);
  const [load, setLoad] = useState(false);

  //decides if the component has gotten the data yet
  useEffect(() => {
    listOfCountries.length === 0 ? setLoad(true) : setLoad(false);
  }, [listOfCountries]);

  return (
    <div>
      {/* shows the data when it is ready */}
      {load ? <Loading /> : <p>got the data</p>}
    </div>
  );
};

export default CountriesList;
