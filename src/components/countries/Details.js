import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ countries }) => {
  const { countryName } = useParams();
  let nation = [];

  for (let place of countries) {
    if (place.name.official === countryName) {
      nation.push(place);
    }
  }

  nation !== [] && console.log(nation);
  return <div>Details</div>;
};

export default Details;
