import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Input = ({ sendSearchTerm }) => {
  const [input, setInput] = useState("");
  const getInput = (term) => {
    setInput(term);
    sendSearchTerm(input);
  };
  return (
    <section className="my-4">
      <Search searchTerm={getInput} />
      <Dropdown />
    </section>
  );
};

export default Input;
