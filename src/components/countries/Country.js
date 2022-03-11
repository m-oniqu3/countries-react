import React from "react";
import styled from "./Country.module.css";
import { useNavigate } from "react-router-dom";

const Country = ({ countries }) => {
  const navigate = useNavigate();

  let size = 30;
  const nf = new Intl.NumberFormat("en-US");

  /**
   * maps over the array and return a card with details about each country
   * if no country is found, inform the user
   */
  let countryDetails = [];
  if (countries.status !== 404) {
    countryDetails = countries
      .slice(0, size)
      .map(({ flags, name, capital, population, region }) => (
        <article
          key={name.official}
          className={styled.article}
          onClick={() => {
            navigate("details");
          }}
        >
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
      //TODO make 404 class
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
