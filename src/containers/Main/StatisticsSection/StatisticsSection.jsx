import React from "react";
import Heading from "../../../components/Heading";
import List from "../../../components/List";
import Section from "../../../components/Section";
import StatisticsItem from "./StatisticsItem";
import "./statisticsSection.scss";

const StatisticsSection = () => {
  const statisticsItem = statistics.map((item) => (
    <StatisticsItem
      key={item.title}
      number={item.number}
      title={item.title}
      order={item.order}
    />
  ));
  return (
    <Section classes="statistics">
      <Heading>
        WEBC
        <span className="accent-color accent-width-big">O</span>RN в цифрах
      </Heading>
      <List classes="statistics__list">{statisticsItem}</List>
    </Section>
  );
};

const statistics = [
  {
    number: 350,
    order: "first",
    title: "Рекламных кампаний в Google",
  },
  {
    number: 60,
    order: "second",
    title: "Направлений бизнеса",
  },
  {
    number: 4,
    order: "third",
    title: "Года в Digital сегменте",
  },
];

export default StatisticsSection;
