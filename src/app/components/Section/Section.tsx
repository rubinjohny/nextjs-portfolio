import styles from "./styles.module.css";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.section}>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export const SectionHeader = ({ title, id }: { title: string; id: string }) => {
  return (
    <div className={styles["section-header"]} id={id}>
      <span>{title}</span>
    </div>
  );
};
