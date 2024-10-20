"use client";
import { motion, useScroll } from "framer-motion";
import styles from "./styles.module.css";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={styles["container"]}
    />
  );
};
