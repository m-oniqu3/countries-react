import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import Details from "./components/countries/Details";
import Filter from "./components/countries/Filter";
import Header from "./components/head/Header";
import Input from "./components/input/Input";
import Request from "./components/request/Request";

function App() {
  //State
  const [countryList, setCountryList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  //const [selectedRegion, setSelectedRegion] = useState("");

  //Sets the state with the data received from the request component
  const sendResults = (data) => setCountryList(data);

  //Sets the state with the data received from the input component
  const sendSearchTerm = (term) => {
    setSearch(term);
  };

  /**
 *   //delete the selcted note and update the state
  const deleteNoteHandler = (note) => {
    setReceivedNote(receivedNote.filter((orignalNote) => orignalNote !== note));
    localStorage.removeItem(note);
  };

 */
  let list = [];
  const filterContinent = (continent) => {
    console.log(continent);
    list = countryList.filter((country) => {
      return country.region === continent;
    });
    setFiltered(list);
    setCountryList([...list]);
    console.log(filtered);
    console.log(list);
    return list;
  };

  return (
    <section>
      <Header />
      {/**send the fetched data to the app component
       * accept the search term from the app component
       */}
      <Request sendResults={sendResults} search={search} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <section className="container">
              {/* send the search term it got from the search component to the app component */}
              <Input
                sendSearchTerm={sendSearchTerm}
                sendContinent={filterContinent}
              />

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

        <Route path="/filter/:continent" exact element={<Filter />} />
      </Routes>
    </section>
  );
}

export default App;
