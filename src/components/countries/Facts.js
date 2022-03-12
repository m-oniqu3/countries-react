import React from "react";
import styled from "./Facts.module.css";

const Facts = (props) => {
  return (
    <p className={styled.data}>
      <span className={`${styled.title} ${props.className}`}>
        {props.title}
      </span>
      {props.data}
    </p>
  );
};

export default Facts;
