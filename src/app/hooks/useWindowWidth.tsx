import { useEffect, useState } from "react";

const MOBILE_BREAK_WIDTH = 600;
const TABLET_BREAK_WIDTH = 992;
const LAPTOP_BREAK_WIDTH = 1200;
const DESKTOP_BREAK_WIDTH = 2560;

type Device =
  | undefined
  | "mobile"
  | "tablet"
  | "laptop"
  | "desktop"
  | "ultrawide";

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  const [device, setDevice] = useState<Device>(undefined);

  if (typeof window === undefined)
    return {
      width: 0,
      isMobile: false,
      isTablet: false,
      isLaptop: false,
      isDesktop: false,
      isUltrawide: false,
    };

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      setWidth(innerWidth);
      if (innerWidth <= MOBILE_BREAK_WIDTH) {
        setDevice("mobile");
      } else if (
        MOBILE_BREAK_WIDTH < innerWidth &&
        innerWidth <= TABLET_BREAK_WIDTH
      ) {
        setDevice("tablet");
      } else if (
        TABLET_BREAK_WIDTH < innerWidth &&
        innerWidth <= LAPTOP_BREAK_WIDTH
      ) {
        setDevice("laptop");
      } else if (
        LAPTOP_BREAK_WIDTH < innerWidth &&
        innerWidth <= DESKTOP_BREAK_WIDTH
      ) {
        setDevice("desktop");
      } else if (DESKTOP_BREAK_WIDTH < innerWidth) setDevice("ultrawide");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return {
    width,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isLaptop: device === "laptop",
    isDesktop: device === "desktop",
    isUltrawide: device === "ultrawide",
  };
};
