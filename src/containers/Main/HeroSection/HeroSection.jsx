import React, { useEffect, useState } from "react";
import Section from "../../../components/Section";
import SquareBracketsDecoration from "../../../components/SquareBracketsDecoration";
import "./heroSection.scss";

const HeroSection = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = (event) => {
      if (event.target.innerWidth <= 768) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section classes="hero" containerClasses="hero__content">
      <h1 className="hero__title">Контекстная реклама в Google</h1>
      <p className="hero__text">
        <SquareBracketsDecoration classes="accent-width-small">
          {isTablet
            ? "ЦЕЛЕВЫЕ КЛИЕНТЫ ДЛЯ ВАШЕГО БИЗНЕСА"
            : "ГЕНЕРИРУЕМ ПОТОК ЦЕЛЕВЫХ КЛИЕНТОВ В ВАШ БИЗНЕС"}
        </SquareBracketsDecoration>
      </p>
      <a className="btn" href="#tools">
        Подробнее
      </a>
    </Section>
  );
};

export default HeroSection;
