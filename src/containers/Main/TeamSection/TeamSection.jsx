import React from "react";
import Heading from "../../../components/Heading";
import List from "../../../components/List";
import Section from "../../../components/Section";
import TeamItem from "./TeamItem";
import "./teamSection.scss";

const TeamSection = () => {
  const teamItem = team.map((member) => (
    <TeamItem
      key={member.name}
      img={member.img}
      name={member.name}
      position={member.position}
      specializations={member.specializations}
    />
  ));
  return (
    <Section classes="team">
      <Heading>Наша Smart-студия</Heading>
      <List classes="team__list">{teamItem}</List>
    </Section>
  );
};

const team = [
  {
    img: "./images/team/team-1.jpg",
    name: "Cтанченко Анатолий",
    position: "Студийный вдохновитель",
    specializations: ["Интернет-маркетолог", "PPC-менеджер"],
  },
  {
    img: "./images/team/team-2.jpg",
    name: "Новиков Андрей",
    position: "Project-менеджер",
    specializations: ["Клиент-менеджер"],
  },
];

export default TeamSection;
