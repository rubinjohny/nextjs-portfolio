import { LandingSection } from "@/app/sections/Landing/LandingSection";
import { CheckUserWidth_Provider } from "./contexts/checkWindowWidth";
import { AboutSection } from "./sections/About/AboutSection";
import { ProjectSection } from "./sections/Projects/ProjectSection";
import { JourneySection } from "./sections/Journey/JourneySection";
import { MenuBar } from "@/app/components/MenuBar/MenuBar";
import { ScrollProgressBar } from "@/app/components/ScrollProgressBar/ScrollProgressBar";

const Home = () => {
  return (
    <CheckUserWidth_Provider>
      <ScrollProgressBar />
      <MenuBar />
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <JourneySection />
    </CheckUserWidth_Provider>
  );
};

export default Home;
