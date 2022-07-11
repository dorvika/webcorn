import React from "react";

const WorkingProcessItem = ({ title, description }) => {
  return (
    <li className="working-process__list-item">
      <h4>{title}</h4>
      {description.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </li>
  );
};

export default WorkingProcessItem;
