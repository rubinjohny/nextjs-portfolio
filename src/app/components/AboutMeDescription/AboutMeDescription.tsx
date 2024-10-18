"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { splitStringUsingRegex } from "@/app/utils/helperFunctions";
import { AboutMeText } from "@/app/utils/sectionTexts";

const charVariants = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
  },
};

export const AboutMeDescription = () => {
  const aboutMeCharsArr = splitStringUsingRegex(AboutMeText);
  return (
    <div className={styles.description}>
      <motion.p
        initial="hidden"
        whileInView="reveal"
        viewport={{
          once: true,
        }}
        transition={{ staggerChildren: 0.001 }}
      >
        {aboutMeCharsArr.map((item, i) => (
          <motion.span
            key={i}
            transition={{ duration: 0.3 }}
            variants={charVariants}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
