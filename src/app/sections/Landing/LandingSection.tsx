import { ThemeToggler } from "@/app/components/ThemeToggler/ThemeToggler";
import { VenomWeb } from "@/app/components/VenomWeb/VenomWeb";
import { TypeWriter } from "@/app/components/TypeWriter/TypeWriter";
import { Button } from "@/app/components/Button/Button";
import styles from "./styles.module.css";

export const LandingSection = () => {
  return (
    <div className={styles["outer-container"]} id="landing">
      <div className={styles.container}>
        <div className={styles.main}>
          <ThemeToggler />
        </div>
        <VenomWeb />
        <div className={styles["bottom-section"]}>
          <TypeWriter />
        </div>
        <div className={styles["learn-more-btn"]}>
          <Button />
        </div>
      </div>
    </div>
  );
};
