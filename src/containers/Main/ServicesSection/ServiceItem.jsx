import React from "react";

const ServiceItem = ({ img, alt, title }) => {
  return (
    <li className="services__list-item">
      <img src={img} alt={alt} width={100} height={100} />
      <p>{title}</p>
    </li>
  );
};

export default ServiceItem;
