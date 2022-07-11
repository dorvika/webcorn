import React, { useState } from "react";
import "./questionsSection.scss";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import ClientForm from "../../../components/ClientForm";

const QuestionsSection = () => {
  const [formSubmissionFlag, setFormSubmissionFlag] = useState(false);
  const toggleFormContent = () => {
    setFormSubmissionFlag(true);
  };

  return (
    <Section classes="questions">
      <Heading>Остались вопросы ?</Heading>
      <p className="questions__text">
        Заполните форму ниже. И получите ответы <br /> на все интересующие Вас
        вопросы в кратчайшие сроки
      </p>
      {!formSubmissionFlag ? (
        <ClientForm
          classes="questions__form"
          toggleFormContent={toggleFormContent}
        />
      ) : (
        <p className="questions__confirmation">
          Спасибо! Мы с Вами свяжемся через 15 мин.
        </p>
      )}
    </Section>
  );
};

export default QuestionsSection;
