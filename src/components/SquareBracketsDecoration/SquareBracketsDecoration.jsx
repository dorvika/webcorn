import React from "react";
import "./squareBracketsDecoration.scss";

const SquareBracketsDecoration = ({ children, classes }) => {
  return (
    <>
      <span className={classes ? `accent-color ${classes}` : "accent-color"}>
        [{" "}
      </span>
      {children}
      <span className={classes ? `accent-color ${classes}` : "accent-color"}>
        {" "}
        ]
      </span>
    </>
  );
};

SquareBracketsDecoration.defaultProps = {
  classes: null,
};

export default SquareBracketsDecoration;
