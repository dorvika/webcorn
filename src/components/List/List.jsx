import React from "react";
import "./list.scss";

const List = ({ children, classes, styleFlag }) => {
  const classNames = classes ? ` list ${classes} ` : "list";
  return <ul className={!styleFlag ? classNames : classes}>{children}</ul>;
};

List.defaultPropd = {
  styleFlag: false,
};

export default List;
