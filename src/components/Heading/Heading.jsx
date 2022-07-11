import React from "react";
import SquareBracketsDecoration from "../SquareBracketsDecoration";
import "./heading.scss";

const Heading = ({ children, classes }) => {
  return (
    <h2 className={classes ? `section__title ${classes}` : "section__title"}>
      <SquareBracketsDecoration>{children}</SquareBracketsDecoration>
    </h2>
  );
};

export default Heading;
