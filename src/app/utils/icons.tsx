import React from "react";
import { IconBaseProps } from "react-icons";
import { ImSun } from "react-icons/im";
import { PiMoonStars } from "react-icons/pi";
import { BsPersonBadge } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

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
