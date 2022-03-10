import React, { useState } from "react";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import Header from "./components/head/Header";
import Request from "./components/request/Request";

function App() {
  //State
  const [countryList, setCountryList] = useState([]);

  //Sets the state with the data received from the request component
  const sendResults = (data) => setCountryList(data);

  return (
    <section>
      <Header />
      <section className="container">
        {/* send the fetched data to the app component */}
        <Request sendResults={sendResults} />

        {/* accepts the data from the app component */}
        <CountriesList listOfCountries={countryList} />
      </section>
    </section>
  );
}

export default App;
