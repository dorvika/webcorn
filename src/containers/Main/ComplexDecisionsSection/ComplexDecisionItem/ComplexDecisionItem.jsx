import React, { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import "./complexDecisionItem.scss";

const ComplexDecisionItem = ({ id, title, price, components, term }) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prevValue) => !prevValue);
  };
  return (
    <>
      <li className="decision-item">
        <div className="decision-item__header">
          <span className="accent-color decision-item__number"># {id}</span>
          <h4 className="decision-item__title">{title}</h4>
          <span className="decision-item__price">
            {price}.
            <span className="accent-color accent-width-small accent-font">
              00
            </span>{" "}
            <span className="accent-font__currency">грн</span>
          </span>
        </div>
        <ul className="decision-item__list">
          {components.map((component) => (
            <li key={component}>
              <span className="accent-color">*</span> {component}
            </li>
          ))}
        </ul>
        <p className="decision-item__term">
          {title === "Ведение рекламного аккаунта Google"
            ? "Стоимость ведения аккаунта"
            : "Срок подготовки проекта"}
          <span className="accent-color"> {term}</span>
        </p>
        <Button classes="decision__btn" action={modalHandler}>
          Заказать
        </Button>
      </li>
      {showModal && <Modal onClose={modalHandler} />}
    </>
  );
};

export default ComplexDecisionItem;
