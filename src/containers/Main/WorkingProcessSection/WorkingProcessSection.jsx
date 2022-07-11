import React from "react";
import Heading from "../../../components/Heading";
import List from "../../../components/List";
import Section from "../../../components/Section";
import WorkingProcessItem from "./WorkingProcessItem";
import "./workingProcessSection.scss";

const processes = [
  {
    title: "Подготовка проекта",
    description: [
      "Анализ ниши, сайта, конкурентов, продукта",
      "Доработки сайта (по необходимости)",
      "Разработка структуры рекламного аккаунта",
    ],
  },
  {
    title: "Запуск проекта",
    description: [
      "Создание / настройка рекламных кампаний",
      "Подключение сервисов Web-аналитик",
      "Разработка медиа-плана",
    ],
  },
  {
    title: "Ведение проекта",
    description: [
      "Контроль и мониторинг проекта",
      "Оптимизация рекламных кампаний",
      "Расширение каналов трафика",
    ],
  },
];

const WorkingProcessSection = () => {
  const processItem = processes.map((process) => (
    <WorkingProcessItem
      key={process.title}
      title={process.title}
      description={process.description}
    />
  ));

  return (
    <Section classes="working-process">
      <Heading classes="working-process__title">Как мы работаем</Heading>

      <List classes="working-process__list">{processItem}</List>
      <div className="progress__bar">
        <div className="progress__bar-circle"></div>
        <div className="progress__bar-circle"></div>
        <div className="progress__bar-circle"></div>
      </div>
    </Section>
  );
};

export default WorkingProcessSection;
