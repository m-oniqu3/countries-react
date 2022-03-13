import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import Details from "./components/countries/Details";
import Header from "./components/head/Header";
import Input from "./components/input/Input";
import Request from "./components/request/Request";
import SearchRequest from "./components/request/SearchRequest";

function App() {
  //State
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");
  //const [selectedRegion, setSelectedRegion] = useState("");

  //Sets the state with the data received from the request component
  const sendResults = (data) => setCountryList(data);

  //Sets the state with the data received from the input component
  const sendSearchTerm = (term) => {
    setSearch(term);
  };
  //Sets the state with data from the searchResults component
  const sendUserResults = (data) => {
    setCountryList(data);
  };

  return (
    <section>
      <Header />
      {/*
       *send the fetched data to the app component
       * accept the search term from the app component
       */}
      <Request sendResults={sendResults} search={search} />
      {/**
       * accepts the search state from the app component
       * sends the fetched data to the app component
       */}
      <SearchRequest search={search} sendUserResults={sendUserResults} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <section className="container">
              {/* send the search term it got from the search component to the app component */}
              <Input sendSearchTerm={sendSearchTerm} />

              {/* accepts the data from the app component */}

              <CountriesList listOfCountries={countryList} />
            </section>
          }
        />
        {/**accepts url parameter
         * accepts the list of countries from the app component(sent from the results component)
         */}
        <Route
          path="/details/:countryName"
          exact
          element={<Details countries={countryList} />}
        />
      </Routes>
    </section>
  );
}

export default App;
