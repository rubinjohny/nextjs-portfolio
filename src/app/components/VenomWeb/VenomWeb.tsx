"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

import { useVenomWebOptions } from "@/app/hooks/useVenomWebOptions";

export const VenomWeb = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);

      await loadPolygonMaskPlugin(engine, true);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { options } = useVenomWebOptions();

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className={styles.tsparticles}
      />
    );
  }

  return null;
};
