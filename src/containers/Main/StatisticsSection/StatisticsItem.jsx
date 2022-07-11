import React from "react";
import CountUp from "react-countup";

const StatisticsItem = ({ number, title, order }) => {
  return (
    <li className="statistics__list-item">
      <span>
        <CountUp end={number} duration={1.5} enableScrollSpy /> +
      </span>
      <p>{title}</p>
    </li>
  );
};

export default StatisticsItem;
