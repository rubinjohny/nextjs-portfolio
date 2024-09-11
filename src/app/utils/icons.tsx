import React from "react";
import { IconBaseProps } from "react-icons";
import { ImSun } from "react-icons/im";
import { PiMoonStars } from "react-icons/pi";

export const LightSun = (props: IconBaseProps) => <ImSun {...props} />;
export const DarkMoon = (props: IconBaseProps) => <PiMoonStars {...props} />;
