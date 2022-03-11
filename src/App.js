import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import Details from "./components/countries/Details";
import Header from "./components/head/Header";
import Input from "./components/input/Input";
import Request from "./components/request/Request";

function App() {
  //State
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");

  //Sets the state with the data received from the request component
  const sendResults = (data) => setCountryList(data);

  //Sets the state with the data received from the input component
  const sendSearchTerm = (term) => {
    setSearch(term);
  };

  return (
    <section>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <section className="container">
                {/* send the search term it got from the search component to the app component */}
                <Input sendSearchTerm={sendSearchTerm} />

                {/**send the fetched data to the app component
                 * accept the search term from the app component
                 */}
                <Request sendResults={sendResults} search={search} />

                {/* accepts the data from the app component */}
                <CountriesList listOfCountries={countryList} />
              </section>
            </>
          }
        />

        <Route path="/details" exact element={<Details />} />
      </Routes>
    </section>
  );
}

export default App;
