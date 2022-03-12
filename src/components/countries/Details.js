import React from "react";
import styled from "./Details.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Facts from "./Facts";

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
  //TODO put the details with the span in its own component
  //TODO add comments, format populations
  //TODO make responsive
  //TODO add shadow to flag img
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
              <Facts title="Native Name" data={country.name.common} />
              <Facts title="Population" data={country.population} />
              <Facts title="Region" data={country.region} />
              <Facts title="Sub Region" data={country.subregion} />
              <Facts title="Capital" data={country.capital} />
            </div>

            <div className={styled.details}>
              <Facts title="Top Level Domain" data={country.tld} />
              <Facts title="Currencies" data={money} />
              <Facts title="Languages" data={lang} />
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
        </article>
      </section>
    );
  });
  return (
    <section className="container my-5">
      {nation !== [] && nationDetails}
    </section>
  );
};

export default Details;
