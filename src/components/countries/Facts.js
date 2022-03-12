import React from "react";
import styled from "./Facts.module.css";

const Facts = ({ title, data }) => {
  return (
    <p className={styled.data}>
      <span className={styled.title}>{title}: </span>
      {data}
    </p>
  );
};

export default Facts;
