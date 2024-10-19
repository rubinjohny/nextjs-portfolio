"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Section, SectionHeader } from "@/app/components/Section/Section";
import { projects, Project } from "@/app/utils/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard/ProjectCard";
import { ProjectSheet } from "@/app/components/ProjectSheet/ProjectSheet";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

type ProjectData = Project | undefined;

export const ProjectSection = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData>(undefined);

  return (
    <>
      <SectionHeader title="Projects" />
      <Section>
        <div className={styles["container"]}>
          <span>
            Here are some of my personal projects. (Sorry, but my professional
            work is top secret 😂 😂)
          </span>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className={styles["projects-grid"]}
          >
            {projects.map((project, i) => {
              return (
                <ProjectCard
                  key={i}
                  title={project.title}
                  onExpand={() => {
                    setIsSheetOpen(true);
                    setProjectData(project);
                  }}
                  image={project.cardImage}
                />
              );
            })}
          </motion.div>
        </div>
      </Section>
      <ProjectSheet
        open={isSheetOpen}
        onClose={() => {
          setIsSheetOpen(false);
          setProjectData(undefined);
        }}
        data={projectData}
      />
    </>
  );
};
