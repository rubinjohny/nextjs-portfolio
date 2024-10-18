import styles from "./styles.module.css";
import { Section, SectionHeader } from "@/app/components/Section/Section";
import { Timeline } from "@/app/components/Timeline/Timeline";

export const JourneySection = () => {
  return (
    <>
      <SectionHeader title="Journey" />
      <Section>
        <div className={styles["container"]}>
          <Timeline />
        </div>
      </Section>
    </>
  );
};
