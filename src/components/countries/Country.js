import React from "react";

const Country = ({ countries }) => {
  console.log(countries);
  let size = 20;
  const countryDetails = countries
    .slice(0, size)
    .map(({ flags, name, capital, population, region }) => (
      <article key={name.official} className="my-4">
        <section>
          <img src={flags.png} alt="flag" />
        </section>
      </article>
    ));
  return <div>{countryDetails}</div>;
};

export default Country;
