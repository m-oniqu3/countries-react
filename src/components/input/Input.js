import React, { useState } from "react";
import styled from "./Input.module.css";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Input = ({ sendSearchTerm }) => {
  //State
  const [input, setInput] = useState("");

  //Set State and send the search term to the app component
  const getInput = (term) => {
    setInput(term);
    sendSearchTerm(input);
  };

  return (
    <section className={styled.wrapper}>
      {/* props to send the term to the parent component */}
      <Search searchTerm={getInput} />
      <Dropdown />
    </section>
  );
};

export default Input;
