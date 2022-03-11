import React, { useState } from "react";
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
    <section className="my-4">
      {/* props to send the term to the parent component */}
      <Search searchTerm={getInput} />
      <Dropdown />
    </section>
  );
};

export default Input;
