"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import { LightSun, DarkMoon } from "@/app/utils/icons";
import { Black, White, SkyBlue } from "@/app/utils/colors";
import styles from "./styles.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles["switch-wrapper"]}>
      <Switch
        uncheckedIcon={
          <LightSun size={20} className={styles["switch-icons"]} />
        }
        checkedIcon={<DarkMoon size={20} className={styles["switch-icons"]} />}
        offColor={SkyBlue}
        offHandleColor={Black}
        onHandleColor={White}
        onColor={Black}
        onChange={(_) => setTheme(theme === "dark" ? "light" : "dark")}
        checked={resolvedTheme === "dark"}
        aria-label="toggle-theme"
      />
    </div>
  );
};
