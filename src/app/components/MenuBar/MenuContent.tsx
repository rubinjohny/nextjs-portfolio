import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { MenuItems, ContactItems } from "@/app/utils/data/sidebar";

const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const livariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type ElementIds = "landing" | "about-me" | "projects" | "journey" | "resume";

type MenuContentProps = {
  toggle: () => void;
};

export const MenuCotent = ({ toggle }: MenuContentProps) => {
  const onSelectMenuItem = (elementId: ElementIds) => {
    if (typeof window !== undefined && elementId === "resume") {
      window.open("/Resume.pdf");
    } else {
      if (typeof document !== undefined) {
        document?.getElementById(elementId)?.scrollIntoView({
          behavior: "smooth",
        });
      }
      toggle();
    }
  };

  return (
    <motion.ul variants={ulvariants} className={styles["ul"]}>
      <div className={styles["outer-container"]}>
        {MenuItems.map((item, i) => (
          <motion.li
            key={i}
            variants={livariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles["li"]}
            onClick={() => onSelectMenuItem(item.id as ElementIds)}
          >
            <div className={styles["icon-placeholder"]}>{item.icon}</div>
            <div className={styles["text-placeholder"]}>
              <span>{item.text}</span>
            </div>
          </motion.li>
        ))}

        <div className={styles["inner-container"]}>
          <motion.li variants={livariants} className={styles["li"]}>
            <span className={styles["contact-span"]}>Contact me</span>
          </motion.li>

          <motion.li variants={livariants} className={styles["li"]}>
            <motion.div
              variants={ulvariants}
              className={styles["contact-container"]}
            >
              {ContactItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={livariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a target="_blank" href={item.href}>
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.li>
        </div>
      </div>
    </motion.ul>
  );
};
