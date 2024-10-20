import { LandingSection } from "@/app/sections/Landing/LandingSection";
import { CheckUserWidth_Provider } from "./contexts/checkWindowWidth";
import { AboutSection } from "./sections/About/AboutSection";
import { ProjectSection } from "./sections/Projects/ProjectSection";
import { JourneySection } from "./sections/Journey/JourneySection";
import { MenuBar } from "@/app/components/MenuBar/MenuBar";

const Home = () => {
  return (
    <CheckUserWidth_Provider>
      <MenuBar />
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <JourneySection />
    </CheckUserWidth_Provider>
  );
};

export default Home;
