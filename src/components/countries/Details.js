import React from "react";
import styled from "./Details.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Facts from "./Facts";

const Details = ({ countries }) => {
  //extract the route parameter
  const { countryName } = useParams();
  const navigate = useNavigate();
  const nf = new Intl.NumberFormat("en-US");
  let nation = [];
  let lang = "";
  let money = "";

  //checks the countries list to see if the name of the country the user clicked on matched any country in the list and push it to the nation array
  for (let place of countries) {
    if (place.name.official === countryName) {
      nation.push(place);
    }
  }

  const nationDetails = nation.map((country) => {
    for (let x of Object.values(country.languages)) {
      lang += x + " ";
    }

    for (let x of Object.values(country.currencies)) {
      money = x.name;
    }
    return (
      <section className={styled.content} key={country.population}>
        <figure>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.official}`}
          />
        </figure>
        <section className={styled.info}>
          <h3>{country.name.official}</h3>
          <div className={styled.detailsgroup}>
            <div className={styled.details}>
              <Facts title="Native Name: " data={country.name.common} />
              <Facts
                title="Population: "
                data={nf.format(`${Number(country.population)}`)}
              />
              <Facts title="Region: " data={country.region} />
              <Facts title="Sub Region: " data={country.subregion} />
              <Facts title="Capital: " data={country.capital} />
            </div>

            <div className={styled.details}>
              <Facts title="Top Level Domain: " data={country.tld} />
              <Facts title="Currencies: " data={money} />
              <Facts title="Languages: " data={lang} />
            </div>
          </div>

          <>
            <h5 className={styled.borders}>Border Countries:</h5>
            <>
              {country.borders ? (
                country.borders.map((border) => {
                  return (
                    <button className={styled.borderbtn}>{border} </button>
                  );
                })
              ) : (
                <p> None known.</p>
              )}
            </>
          </>
        </section>
      </section>
    );
  });
  return (
    <section className="container my-5 ">
      <button onClick={() => navigate(-1)}>Back</button>
      <>{nation !== [] && nationDetails}</>
    </section>
  );
};

export default Details;
