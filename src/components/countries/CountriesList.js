import React, { useState, useEffect } from "react";
import Loading from "../utility/Loading";
import Country from "./Country";

const CountriesList = ({ listOfCountries }) => {
  const [load, setLoad] = useState(false);

  //decides if the component has gotten the data yet
  useEffect(() => {
    listOfCountries.length === 0 ? setLoad(true) : setLoad(false);
  }, [listOfCountries]);

  return (
    <div className="mt-3">
      {/* shows the data when it is ready */}
      {load ? (
        <Loading />
      ) : (
        <section>
          <Country countries={listOfCountries} />
        </section>
      )}
    </div>
  );
};

export default CountriesList;
