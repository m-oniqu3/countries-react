import React, { useState } from "react";
import styled from "./Input.module.css";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Input = ({ sendSearchTerm, sendContinent }) => {
  //State
  const [input, setInput] = useState("");
  const [continent, setContinent] = useState("All");

  //Set State and send the search term to the app component
  const getInput = (term) => {
    setInput(term);
    sendSearchTerm(input);
  };

  const getContinent = (data) => {
    setContinent(data);
  };
  console.log(continent);

  return (
    <section className={styled.wrapper}>
      {/* props to send the term to the parent component */}
      <Search searchTerm={getInput} />
      <Dropdown sendContinent={getContinent} />
    </section>
  );
};

export default Input;
