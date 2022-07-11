import React from "react";
import SquareBracketsDecoration from "../../../components/SquareBracketsDecoration";

const TeamItem = ({ img, name, position, specializations }) => {
  return (
    <li className="team__list-item">
      <img src={img} alt={name} width={280} height={460} />
      <div className="team__list-content">
        <h3>{name}</h3>
        <p>
          <SquareBracketsDecoration>{position}</SquareBracketsDecoration>
        </p>
        {specializations.map((specialization) => (
          <p key={specialization}>{specialization}</p>
        ))}
      </div>
    </li>
  );
};

export default TeamItem;
