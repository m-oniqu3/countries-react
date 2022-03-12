import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ countries }) => {
  const { countryName } = useParams();
  let nation = [];
  let lang = "";

  for (let place of countries) {
    if (place.name.official === countryName) {
      nation.push(place);
    }
  }

  nation !== [] && console.log(nation);

  const nationDetails = nation.map((country) => {
    for (let x of Object.values(country.languages)) {
      lang += x + " ";
    }
    console.log(lang);
    return (
      <section key={country.name.official}>
        <button>Back</button>

        <article>
          <figure>
            <img src="" alt="" />
          </figure>
          <section>
            <h3>{country.name.official}</h3>

            <div>
              <p>
                <span>Native Name: </span>
                {country.name.nativeName.nld.common}
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

            <div>
              <p>
                <span>Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currencies.name}
              </p>
              <p>
                <span>Languages: </span>
                {lang}
              </p>
            </div>

            <>
              <h5>Border Countries:</h5>
              <div>
                {country.borders.map((border) => {
                  return <button>{border} </button>;
                })}
              </div>
            </>
          </section>
        </article>
      </section>
    );
  });
  return <div>{nation !== [] && nationDetails}</div>;
};

export default Details;
