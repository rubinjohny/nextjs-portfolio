"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { Section, SectionHeader } from "@/app/components/Section/Section";
import { projects } from "@/app/utils/data/projects";
import { ProjectCard } from "@/app/components/ProjectCard/ProjectCard";

export const ProjectSection = () => {
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
        delayChildren: 1,
      },
    },
  };

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
            animate="show"
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
                    console.log("on expand");
                  }}
                  description={project.description}
                  image={project.cardImage}
                  gif={project.gif}
                  carouselImages={project.carouselImages}
                  tags={project.tags}
                />
              );
            })}
          </motion.div>
        </div>
      </Section>
    </>
  );
};
