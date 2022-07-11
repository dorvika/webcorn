import React, { useState } from "react";
import ClientForm from "../ClientForm";
import SquareBracketsDecoration from "../SquareBracketsDecoration";
import "./modal.scss";

const Modal = ({ onClose }) => {
  const [formSubmissionFlag, setFormSubmissionFlag] = useState(false);
  const toggleModalContent = () => {
    setFormSubmissionFlag(true);
  };

  return (
    <>
      <div className="modal">
        <button className="close__btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal__content">
          <h5 className="modal__title">
            <SquareBracketsDecoration>Заполните форму</SquareBracketsDecoration>
          </h5>
          <p className="modal__text">мы свяжемся с Вами в ближайшее время</p>{" "}
          {!formSubmissionFlag ? (
            <ClientForm toggleModalContent={toggleModalContent} />
          ) : (
            <p className="modal__confirmation" onClick={onClose}>
              Спасибо! Мы с Вами свяжемся через 15 мин.
            </p>
          )}
        </div>
      </div>
      <div className="backdrop" onClick={onClose} />
    </>
  );
};

export default Modal;
