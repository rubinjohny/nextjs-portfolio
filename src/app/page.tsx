import { LandingSection } from "@/app/sections/Landing/LandingSection";
import { CheckUserWidth_Provider } from "./contexts/checkWindowWidth";
import { AboutSection } from "./sections/About/AboutSection";
import { ProjectSection } from "./sections/Projects/ProjectSection";
import { JourneySection } from "./sections/Journey/JourneySection";

const Home = () => {
  return (
    <CheckUserWidth_Provider>
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <JourneySection />
    </CheckUserWidth_Provider>
  );
};

export default Home;
