import React from "react";
import { IconBaseProps } from "react-icons";
import { ImSun } from "react-icons/im";
import { PiMoonStars, PiPersonSimpleHikeFill } from "react-icons/pi";
import { BsPersonBadge } from "react-icons/bs";
import { FaLocationDot, FaCrutch } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { ImAirplane } from "react-icons/im";
import { GiLovers, GiBigDiamondRing } from "react-icons/gi";
import { MdBusinessCenter, MdSchool, MdBoy } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

export const LightSun = (props: IconBaseProps) => <ImSun {...props} />;
export const DarkMoon = (props: IconBaseProps) => <PiMoonStars {...props} />;
export const PersonBadge = (props: IconBaseProps) => (
  <BsPersonBadge {...props} />
);
export const LocationIcon = (props: IconBaseProps) => (
  <FaLocationDot {...props} />
);

export const CalendarIcon = (props: IconBaseProps) => (
  <CiCalendarDate {...props} />
);

export const AirplaneIcon = (props: IconBaseProps) => <ImAirplane {...props} />;
export const MarriageIcon = (props: IconBaseProps) => <GiLovers {...props} />;
export const InjuryIcon = (props: IconBaseProps) => <FaCrutch {...props} />;
export const ProposalIcon = (props: IconBaseProps) => (
  <GiBigDiamondRing {...props} />
);
export const HikeIcon = (props: IconBaseProps) => (
  <PiPersonSimpleHikeFill {...props} />
);
export const WorkIcon = (props: IconBaseProps) => (
  <MdBusinessCenter {...props} />
);
export const SchoolIcon = (props: IconBaseProps) => <MdSchool {...props} />;
export const InternIcon = (props: IconBaseProps) => <MdBoy {...props} />;
export const SpawnIcon = (props: IconBaseProps) => (
  <FaBirthdayCake {...props} />
);
