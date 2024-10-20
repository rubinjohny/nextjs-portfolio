import styles from "./styles.module.css";
import { Section, SectionHeader } from "@/app/components/Section/Section";
import { Expertise } from "@/app/components/Expertise/Expertise";
import { Experience } from "@/app/components/Experience/Experience";
import { AboutMeDescription } from "@/app/components/AboutMeDescription/AboutMeDescription";

export const AboutSection = () => {
  return (
    <div className={styles.mt}>
      <SectionHeader title="About me" id="about-me" />
      <Section>
        <div className={styles["container"]}>
          <AboutMeDescription />
          <div className={styles.blob} />

          <div className={styles["container-hats"]}>
            <div className={styles["text-gradient"]}>
              <p>Software Engineer</p>
            </div>
          </div>

          <div className={styles["bottom-section"]}>
            <Expertise />
            <Experience />
          </div>
        </div>
      </Section>
    </div>
  );
};
