import "./main.scss";
import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import WorkingProcessSection from "./WorkingProcessSection";

import ToolsSectionList from "./ToolsSection/ToolsSectionList";
import AdvertisingSection from "./AdvertisingSection";
import StatisticsSection from "./StatisticsSection";
import TeamSection from "./TeamSection";
import ComplexDecisionsSection from "./ComplexDecisionsSection";
import QuestionsSection from "./QuestionsSection";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <div className="wrapper">
        <WorkingProcessSection />
        <ToolsSectionList />
        <AdvertisingSection />
        <StatisticsSection />
        <TeamSection />
        <ComplexDecisionsSection />
      </div>
      <QuestionsSection />
    </main>
  );
};

export default Main;
