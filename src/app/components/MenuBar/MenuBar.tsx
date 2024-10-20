"use client";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import styles from "./styles.module.css";
import { MenuCotent } from "./MenuContent";

const sidebarVariant = {
  open: {
    clipPath: `circle(2000vh at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 80,
    },
  },
};

export const MenuBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={styles["nav"]}
    >
      <motion.div className={styles["background"]} variants={sidebarVariant}>
        <MenuCotent toggle={() => toggleOpen()} />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
