import React from "react";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import List from "../../../components/List";
import "./complexDecisionsSection.scss";
import ComplexDecisionItem from "./ComplexDecisionItem";

const ComplexDecisionsSection = () => {
  const complexDecisionItem = complexDecisions.map((decision) => (
    <ComplexDecisionItem
      key={decision.id}
      id={decision.id}
      title={decision.title}
      price={decision.price}
      components={decision.components}
      term={decision.term}
    />
  ));
  return (
    <Section classes="complex-decision">
      <Heading>Комплексные решения</Heading>
      <p className="complex-decision__subtitle">
        Разработаем эффективную систему рекламных <br /> кампаний с учетом
        особенностей спроса в <br />
        Вашем бизнесе
      </p>
      <List classes="complex-decision__list">{complexDecisionItem}</List>
    </Section>
  );
};

const complexDecisions = [
  {
    id: 1,
    title: "Поиск + КМС + Ремаркетинг",
    price: 2899,
    components: [
      "Анализ товарной ниши, сайта, конкурентов",
      "Рекомендации к правкам по сайту",
      "Разработка структуры аккаунта",
      "Разработка медиа-плана",
      "Настройка рекламных кампаний",
      "Подключение Web-аналитики",
      "Запуск рекламных кампаний",
      "Ведение РК в течении 14 дней",
    ],
    term: "до 5 дней",
  },
  {
    id: 2,
    title: "Поиск + КМС + Shopping + Ремаркетинг",
    price: 4999,
    components: [
      "Анализ товарной ниши, сайта, конкурентов",
      "Рекомендации к правкам по сайту",
      "Разработка структуры аккаунта",
      "Разработка медиа-плана",
      "Настройка рекламных кампаний",
      "Подключение Web-аналитики",
      "Запуск рекламных кампаний",
      "Ведение РК в течении 14 дней",
    ],
    term: "до 7 дней",
  },
  {
    id: 3,
    title: "Ведение рекламного аккаунта Google",
    price: 2999,
    components: [
      "Анализ эффективности РК",
      "Корректировка медиа плана",
      "Корректировка аккаунта и РК",
      "Разработка медиа-плана",
      "Разработка и тестирование гипотез",
      "Оперативный контроль РК",
      "Внедрение автоматических стратегий",
      "Масштабирование рекламных кампаний",
    ],
    term: "за 1 мес",
  },
];

export default ComplexDecisionsSection;
