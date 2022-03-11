import React from "react";
import styled from "./Country.module.css";

const Country = ({ countries }) => {
  let size = 30;
  const nf = new Intl.NumberFormat("en-US");

  //TODO reduce load time

  //TODO change the colour of the p tags
  //TODO format the population

  /**
   * maps over the array and return a card with details about each country
   * if not country if found, inform the user
   */
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
              {nf.format(`${Number(population)}`)}
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
    return (
      <h3 className={styled.empty}>
        <h1>Oops!</h1>
        Sorry! We couldn't find a country by that name. Maybe try searching for
        something else.
      </h3>
    );
  }

  return <section className={styled.countriesGrid}>{countryDetails}</section>;
};

export default Country;
