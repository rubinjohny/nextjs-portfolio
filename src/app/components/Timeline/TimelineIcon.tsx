import * as motion from "framer-motion/client";
import styles from "./styles.module.css";
import {
  AirplaneIcon,
  MarriageIcon,
  InjuryIcon,
  ProposalIcon,
  HikeIcon,
  WorkIcon,
  SchoolIcon,
  InternIcon,
  SpawnIcon,
} from "@/app/utils/icons";
import { IconStrings } from "@/app/utils/data/journey";

const FadeInVariantIcon = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

type Props = {
  icon: IconStrings;
};

const IconSet = {
  Plane: <AirplaneIcon color="white" size={20} />,
  Marriage: <MarriageIcon color="white" size={20} />,
  Injury: <InjuryIcon color="white" size={20} />,
  Proposal: <ProposalIcon color="white" size={20} />,
  Mountain: <HikeIcon color="white" size={20} />,
  Work: <WorkIcon color="white" size={20} />,
  School: <SchoolIcon color="white" size={20} />,
  Intern: <InternIcon color="white" size={20} />,
  Spawn: <SpawnIcon color="white" size={20} />,
};

export const TimelineIcon = ({ icon }: Props) => {
  return (
    <motion.div
      variants={FadeInVariantIcon}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.5 }}
      className={styles["icon"]}
    >
      <div className={styles["inner-icon"]}>{IconSet[icon]}</div>
    </motion.div>
  );
};
