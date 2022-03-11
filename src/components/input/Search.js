import React from "react";
import styled from "./Search.module.css";

const Search = () => {
  return (
    <form>
      <input
        className={styled.search}
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
