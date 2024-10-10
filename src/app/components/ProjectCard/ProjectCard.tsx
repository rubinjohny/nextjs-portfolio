"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const imgVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.3,
    },
  },
};

type ProjectCards = {
  title: string;
  description: string;
  image: string;
  gif: string | undefined;
  carouselImages: string[];
  tags: string;
  onExpand: () => void;
};

export const ProjectCard = ({
  title,
  description,
  image,
  gif,
  carouselImages,
  tags,
  onExpand,
}: ProjectCards) => {
  return (
    <motion.div className={styles["container"]}>
      <motion.div className={styles["base-card"]} variants={imgVariants}>
        <Image
          src={image}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      <motion.div className={styles["content"]} variants={contentVariants}>
        <div className={styles["title-container"]}>
          <span>{title}</span>
        </div>
        <div className={styles["learn-more-btn"]}>
          <span>Learn More</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
