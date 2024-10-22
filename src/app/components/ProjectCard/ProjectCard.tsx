"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { useWidth } from "@/app/hooks/useWindowWidth";
import { ArrowUp } from "@/app/utils/icons";

const imgVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
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
      delay: 1.5,
    },
  },
};

type ProjectCardProps = {
  title: string;
  image: string;
  onExpand: () => void;
};

export const ProjectCard = ({ title, image, onExpand }: ProjectCardProps) => {
  const { isMobile, isTablet } = useWidth();

  const showMoreIcon = isMobile || isTablet;

  return (
    <motion.div className={styles["container"]}>
      <motion.div
        className={styles["base-card"]}
        variants={imgVariants}
        transition={{ duration: 0.2 }}
      >
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

      <motion.div
        className={styles["content"]}
        variants={contentVariants}
        onClick={() => onExpand()}
      >
        <div className={styles["title-container"]}>
          <span>{title}</span>
          {showMoreIcon && (
            <div className={styles["arrow"]}>
              <ArrowUp size={16} />
            </div>
          )}
        </div>
        <div className={styles["learn-more-btn"]}>
          <span>Learn More</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
