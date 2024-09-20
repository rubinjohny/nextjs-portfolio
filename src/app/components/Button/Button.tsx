"use client";
import styles from "./styles.module.css";

export const Button = () => {
  return (
    <div>
      <button
        className={styles.button}
        role="button"
        onClick={() => {
          if (typeof document !== undefined)
            document?.getElementById("about-me")?.scrollIntoView({
              behavior: "smooth",
            });
        }}
      >
        Learn more
      </button>
    </div>
  );
};
