import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Milestone } from "@/app/utils/data/journey";

const ContentAnimation = {
  hidden: (left: boolean) => ({
    opacity: 0,
    x: left ? -20 : 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

type Props = {
  data: Milestone;
  left: boolean;
};

export const TimelineContent = ({ data, left }: Props) => {
  const { title, description, date } = data;

  return (
    <motion.div
      variants={ContentAnimation}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.5 }}
      custom={left}
      className={styles["content"]}
    >
      <div className={styles["title"]}>
        <span>{title}</span>
      </div>
      <div className={styles["description"]}>
        <span>{description}</span>
      </div>
      <div className={styles["date"]}>
        <span>{date}</span>
      </div>
    </motion.div>
  );
};
