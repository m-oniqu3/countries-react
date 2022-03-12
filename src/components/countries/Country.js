import React from "react";
import styled from "./Country.module.css";
import { useNavigate } from "react-router-dom";
import Facts from "./Facts";

const Country = ({ countries }) => {
  const navigate = useNavigate();

  /** navigating to the details page for the country the user clicked on  */
  const moreInfo = (name) => {
    navigate(`details/${name.official}`);
  };

  const nf = new Intl.NumberFormat("en-US");

  /**
   * maps over the array and return a card with details about each country
   * if no country is found, inform the user
   */
  let countryDetails = [];
  if (countries.status !== 404) {
    countryDetails = countries.map(
      ({ flags, name, capital, population, region }) => (
        <article
          key={name.official}
          className={styled.article}
          onClick={() => moreInfo(name)}
        >
          <figure className={styled.flag}>
            <img src={flags.png} alt="flag" />
          </figure>

          <section className={styled.details}>
            <div className={styled.countrytitle}>
              <Facts className={styled.title} title={name.official} />
            </div>
            <Facts
              title="Population: "
              data={nf.format(`${Number(population)}`)}
            />
            <Facts title="Region: " data={region} />
            <Facts title="Capital: " data={capital} />
          </section>
        </article>
      )
    );
  } else {
    return (
      //TODO make 404 class
      <div className={styled.empty}>
        <h1>Oops!</h1>
        Sorry! We couldn't find a country by that name. Maybe try searching for
        something else.
      </div>
    );
  }

  return <section className={styled.countriesGrid}>{countryDetails}</section>;
};

export default Country;
