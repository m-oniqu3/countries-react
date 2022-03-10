import React from "react";

const Country = ({ countries }) => {
  // console.log(countries);
  let size = 20;

  /*
  const random = [];
  let randomSet = new Set();

  for (let i = 0; i <= 20; i++) {
    random.push(Math.floor(Math.random() * 250));
    randomSet = [...random];
  }
  console.log(randomSet);
  

    const test = randomSet.map((numm) => {
      return countries.map((place) => {
        return <p key={place.name.official}>{place[numm]}</p>;
      });
    });

    const test = countries.map((place) => {
      return randomSet.map((numm) => {
        return <p>{place[numm].name.official}</p>;
      });
    });
  const name = [];
  for (let x = 0; x < randomSet.size; x++) {
    name.push(countries[randomSet[x]].name.official);
  }

  console.log(name);
  */
  //TODO reduce load time
  //TODO select random countries of the size above

  const countryDetails = countries
    .slice(0, size)
    .map(({ flags, name, capital, population, region }) => (
      <article key={name.official} className="my-4">
        <section>
          <img src={flags.png} alt="flag" />
        </section>
        <section>
          <h3 className="name">{name.official}</h3>
          <p>
            <span className="population">Population: </span>
            {population}
          </p>
          <p>
            <span className="region">Region: </span>
            {region}
          </p>
          <p>
            <span className="capital">Capital:</span>
            {capital}
          </p>
        </section>
      </article>
    ));

  return <div>{countryDetails}</div>;
};

export default Country;
