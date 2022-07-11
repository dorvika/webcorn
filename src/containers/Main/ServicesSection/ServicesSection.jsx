import React from "react";
import Heading from "../../../components/Heading";
import List from "../../../components/List";
import Section from "../../../components/Section";
import ServiceItem from "./ServiceItem";
import "./servicesSection.scss";

const ServicesSection = () => {
  const serviceListItems = services.map((service) => (
    <ServiceItem
      key={service.title}
      img={service.img}
      alt={service.alt}
      title={service.title}
    />
  ));
  return (
    <Section classes="services">
      <Heading>А так же</Heading>
      <List classes="services__list">{serviceListItems}</List>
    </Section>
  );
};

export default ServicesSection;

const services = [
  {
    img: "./images/icons/right_arrow_in_circle.png",
    alt: "right arrow in circle icon",
    title: "Увеличение количества обращений и заявок уже через 3 дня",
  },
  {
    img: "./images/icons/user_circle_plus_ico.png",
    alt: "user circle plus icon",
    title: "Web-аналитика + настроенные каналы привлечения новых клиентов",
  },
  {
    img: "./images/icons/chart_down_in_a_circle.png",
    alt: "chart down in a circle icon",
    title: "Прогнозирование и масштабирование бизнес-процессов",
  },
];
