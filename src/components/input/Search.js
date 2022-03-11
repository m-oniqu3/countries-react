import React, { useEffect, useState } from "react";
import styled from "./Search.module.css";

const Search = ({ searchTerm }) => {
  //State
  const [input, setInput] = useState("");

  //Set State with the input the user types in
  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  //* when the input changes, send the new input to the parent component (input component)
  useEffect(() => {
    searchTerm(input);
  }, [input, searchTerm]);

  return (
    <form>
      <input
        className={styled.search}
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Search;
