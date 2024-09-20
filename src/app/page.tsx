import { LandingSection } from "@/app/sections/Landing/LandingSection";
import { CheckUserWidth_Provider } from "./contexts/checkWindowWidth";
import { AboutSection } from "./sections/About/AboutSection";

const Home = () => {
  return (
    <CheckUserWidth_Provider>
      <LandingSection />
      <AboutSection />
    </CheckUserWidth_Provider>
  );
};

export default Home;
