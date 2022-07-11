import React from "react";
import "./button.scss";

const Button = ({ children, classes, type, action }) => {
  return (
    <button
      onClick={action}
      type={type}
      className={classes ? `btn ${classes}` : "btn"}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  action: null,
};

export default Button;
