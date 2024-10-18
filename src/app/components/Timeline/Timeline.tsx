"use client";
import styles from "./styles.module.css";
import { TimelineIcon } from "./TimelineIcon";
import { TimelineContent } from "./TimelineContent";
import { milestones, IconStrings } from "@/app/utils/data/journey";
import { useWidth } from "@/app/hooks/useWindowWidth";

export const Timeline = () => {
  const { isMobile, width } = useWidth();

  if (width === 0) return null;

  return (
    <div className={styles["timeline"]}>
      <ul>
        {milestones.map((item, i) => (
          <li key={i}>
            <div className={styles["node"]}>
              <TimelineIcon icon={item.icon as IconStrings} />
              <TimelineContent
                data={item}
                left={isMobile ? false : i % 2 === 0}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
