import { motion, SVGMotionProps } from "framer-motion";
import styles from "./styles.module.css";

type Props = { toggle: () => void };

type PathProps = SVGMotionProps<SVGPathElement>;

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const variant = {
  open: {
    x: 220,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 80,
    },
  },
  close: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 80,
    },
  },
};

export const MenuToggle = ({ toggle }: Props) => {
  return (
    <motion.button
      onClick={toggle}
      className={styles["menu-btn"]}
      variants={variant}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};
