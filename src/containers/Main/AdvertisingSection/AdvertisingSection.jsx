import React, { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Heading from "../../../components/Heading";
import "./advertisingSection.scss";
import Section from "../../../components/Section";

const AdvertisingSection = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prevValue) => !prevValue);
  };
  return (
    <Section classes="advertising">
      <Heading classes="advertising__title">
        Позвольте клиентам находить Вас
      </Heading>
      <p className="advertising__text">
        Закажите настройку рекламы в Google и получите до <br />
        <span className="accent-color accent-width-big">
          {" "}
          +300% новых клиентов{" "}
        </span>
        уже в 1 месяц
      </p>
      <Button action={modalHandler}>Заказать звонок</Button>
      {showModal && <Modal onClose={modalHandler} />}{" "}
    </Section>
  );
};

export default AdvertisingSection;
