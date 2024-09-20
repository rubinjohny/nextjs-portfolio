"use client";
import { createContext, useContext } from "react";
import { useWidth } from "../hooks/useWindowWidth";

const CheckUserWidth = createContext({ isMobile: false, width: 0 });

export const CheckUserWidth_Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isMobile, width } = useWidth();

  return (
    <CheckUserWidth.Provider
      value={{
        isMobile,
        width,
      }}
    >
      {children}
    </CheckUserWidth.Provider>
  );
};

export const useCheckUserWidth = () => {
  return useContext(CheckUserWidth);
};
