import styles from "./styles.module.css";
import { Section } from "@/app/components/Section/Section";

export const AboutSection = () => {
  return (
    <div className={styles.mt} id="about-me">
      <Section>
        <span>this is the about section</span>
      </Section>
    </div>
  );
};
