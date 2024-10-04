"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.css";
import { skills, Skill } from "@/app/utils/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const SkillItem = ({ title, img, index }: Skill) => {
  return (
    <motion.div
      className={styles["skill-box"]}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className={styles["skill-img-container"]}>
        {img !== "" && (
          <Image
            className={styles["skill-img"]}
            src={img}
            height={40}
            width={40}
            alt="logo"
          />
        )}
      </div>
      <div className={styles["skill-title-container"]}>
        <span>{title}</span>
      </div>
    </motion.div>
  );
};

export const Expertise = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span>Expertise</span>
      </div>

      <div className={styles["skills_container"]}>
        {skills.map((skill, i) => (
          <SkillItem key={i} title={skill.title} img={skill.img} index={i} />
        ))}
      </div>
    </div>
  );
};
