import React, { useEffect, useState } from "react";
import styled from "./Search.module.css";

const Search = ({ searchTerm }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  // console.log(input);
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
