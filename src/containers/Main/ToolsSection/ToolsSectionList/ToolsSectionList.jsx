import React from "react";
import Heading from "../../../../components/Heading";
import List from "../../../../components/List";
import Section from "../../../../components/Section";
import ToolCard from "../ToolCard/ToolCard";
import "./toolsSectionList.scss";

const tools = [
  {
    image: "./images/tools/poisk.jpg",
    title: "Поисковая реклама в выдаче Google",
    description:
      "Охват аудитории максимально расположенной к покупке или заказу товаров и услуг. Эффективно стимулирует быстрые заявки и продажи",
    price: 1999,
    termOfPerformance: 3,
  },
  {
    image: "./images/tools/KMS-web.jpg",
    title: "Контекстно-медийная сеть Google",
    description:
      "Максимальный охват аудитории по различным комбинациям таргетинга. Стимулирует знакомство аудитории с брендом и продуктом, а также формирование лояльности к ним",
    price: 1199,
    termOfPerformance: 2,
  },
  {
    image: "./images/tools/shop1.jpg",
    title: "Поисковая реклама Google Shopping",
    description:
      "Реклама для интернет-магазинов. Охват максимально вовлеченных покупателей. Канал имеет высокую вероятность совершения конверсии потенциальными клиентами",
    price: 2499,
    termOfPerformance: 3,
  },
  {
    image: "./images/tools/youtube1.jpg",
    title: "Видеореклама в YouTube",
    description:
      "Максимальный охват потенциальных клиентов посредством визуализации продукта или услуги. Позволяет помочь определиться с выбором вовлеченной аудитории",
    price: 2899,
    termOfPerformance: 5,
  },
];

const ToolsSectionList = () => {
  const toolCards = tools.map((tool) => (
    <ToolCard
      key={tool.title}
      img={tool.image}
      title={tool.title}
      description={tool.description}
      price={tool.price}
      termOfPerformance={tool.termOfPerformance}
    />
  ));

  return (
    <Section classes="tools" id="tools">
      <Heading>Инструменты Google Ads</Heading>
      <List classes="tools__list" styleFlag={true}>
        {toolCards}
      </List>
    </Section>
  );
};

export default ToolsSectionList;
