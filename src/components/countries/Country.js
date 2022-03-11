import React from "react";
import styled from "./Country.module.css";

const Country = ({ countries }) => {
  // console.log(countries);
  let size = 20;

  //TODO reduce load time
  //TODO select random countries of the size above

  //TODO change the colour of the p tags
  //TODO format the population
  let countryDetails = [];
  if (countries.status !== 404) {
    countryDetails = countries
      .slice(0, size)
      .map(({ flags, name, capital, population, region }) => (
        <article key={name.official} className={styled.article}>
          <section className={styled.flag}>
            <img src={flags.png} alt="flag" />
          </section>

          <section className={styled.details}>
            <h3 className={styled.name}>{name.official}</h3>
            <p>
              <span className={styled.population}>Population: </span>
              {population}
            </p>
            <p>
              <span className={styled.region}>Region: </span>
              {region}
            </p>
            <p>
              <span className={styled.capital}>Capital: </span>
              {capital}
            </p>
          </section>
        </article>
      ));
  } else {
    return <div>No country found</div>;
  }

  return <section className={styled.countriesGrid}>{countryDetails}</section>;
};

export default Country;
