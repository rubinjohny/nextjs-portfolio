import styles from "./styles.module.css";
import { Section, SectionHeader } from "@/app/components/Section/Section";
import { Timeline } from "@/app/components/Timeline/Timeline";
import { JourneyText } from "@/app/utils/sectionTexts";

export const JourneySection = () => {
  return (
    <>
      <SectionHeader title="Journey" id="journey" />
      <Section>
        <div className={styles["container"]}>
          <span>{JourneyText}</span>
          <Timeline />
        </div>
      </Section>
    </>
  );
};
