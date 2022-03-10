import React, { useState } from "react";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import Header from "./components/head/Header";
import Request from "./components/request/Request";

function App() {
  const [countryList, setCountryList] = useState([]);

  const sendResults = (data) => setCountryList(data);
  return (
    <div>
      <Header />
      <Request sendResults={sendResults} />
      <CountriesList listOfCountries={countryList} />
    </div>
  );
}

export default App;
