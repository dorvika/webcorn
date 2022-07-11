import React, { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import SquareBracketsDecoration from "../../../../components/SquareBracketsDecoration";
import "./toolCard.scss";

const ToolCard = ({ img, title, description, price, termOfPerformance }) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prevValue) => !prevValue);
  };
  return (
    <>
      <li className="tool__list-item">
        <img src={img} alt={title} />
        <h4>
          <SquareBracketsDecoration>{title}</SquareBracketsDecoration>
        </h4>
        <p>{description}</p>
        <div className="price">
          от
          <span className="accent-color accent-price-big">
            {" "}
            {price}.<span className="accent-price-small">00 </span>
          </span>
          грн
        </div>
        <div className="terms">
          Срок настройки
          <span className="accent-color accent-terms">
            {" "}
            до {termOfPerformance} рабочих дней
          </span>
        </div>
        <Button action={modalHandler}>Заказать консультацию</Button>
      </li>
      {showModal && <Modal onClose={modalHandler} />}
    </>
  );
};

export default ToolCard;
