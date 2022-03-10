import React from "react";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <header className={styled.headerWrap}>
      <p className={styled.question}>Where in the world?</p>
    </header>
  );
};

export default Header;
