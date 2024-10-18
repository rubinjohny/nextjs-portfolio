import { LandingSection } from "@/app/sections/Landing/LandingSection";
import { CheckUserWidth_Provider } from "./contexts/checkWindowWidth";
import { AboutSection } from "./sections/About/AboutSection";
import { ProjectSection } from "./sections/Projects/ProjectSection";
import { JourneySection } from "./sections/Journey/JourneySection";
import styles from "./page.module.css";

const Home = () => {
  return (
    <CheckUserWidth_Provider>
      <div className={styles["page-container"]}>
        <LandingSection />
        <AboutSection />
        <ProjectSection />
        <JourneySection />
      </div>
    </CheckUserWidth_Provider>
  );
};

export default Home;
