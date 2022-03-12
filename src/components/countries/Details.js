import React from "react";
import styled from "./Details.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Details = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  let nation = [];
  let lang = "";
  let money = "";

  for (let place of countries) {
    if (place.name.official === countryName) {
      nation.push(place);
    }
  }

  //TODO make component smaller
  const nationDetails = nation.map((country) => {
    for (let x of Object.values(country.languages)) {
      lang += x + " ";
    }

    for (let x of Object.values(country.currencies)) {
      money = x.name;
    }
    return (
      <section className={styled.content} key={country.population}>
        <button onClick={() => navigate(-1)}>Back</button>

        <article>
          <figure>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.official}`}
            />
          </figure>
          <section className={styled.info}>
            <h3>{country.name.official}</h3>

            <div className={styled.details}>
              <p>
                <span>Native Name: </span>
                {country.name.common}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>

            <div className={styled.details}>
              <p>
                <span>Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {money}
              </p>
              <p>
                <span>Languages: </span>
                {lang}
              </p>
            </div>

            <>
              <h5 className={styled.borders}>Border Countries:</h5>
              <div>
                {country.borders ? (
                  country.borders.map((border) => {
                    return (
                      <button className={styled.borderbtn}>{border} </button>
                    );
                  })
                ) : (
                  <p> None known.</p>
                )}
              </div>
            </>
          </section>
        </article>
      </section>
    );
  });
  return (
    <section className="container">{nation !== [] && nationDetails}</section>
  );
};

export default Details;
