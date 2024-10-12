import Image from "next/image";
import ProjectCarousel from "@/app/components/ProjectCarousel/ProjectCarousel";
import styles from "./styles.module.css";
import { Project } from "@/app/utils/data/projects";

import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};

export const SheetContent = ({ data }: { data: Project }) => {
  const { title, description, tags, carouselImages, gif } = data;
  const showMiddleSection = gif || !!carouselImages.length;
  const slides = gif ? [gif, ...carouselImages] : carouselImages;

  return (
    <div className={styles["sheet-content"]}>
      <div className={styles["title"]}>
        <span>{title}</span>
      </div>
      {showMiddleSection && (
        <div className={styles["middle-section"]}>
          <div className={styles["image-container"]}>
            {gif && !carouselImages.length && (
              <Image
                src={gif}
                alt={title}
                sizes="100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            )}
            {!!carouselImages.length && (
              <ProjectCarousel slides={slides} options={OPTIONS} />
            )}
          </div>
        </div>
      )}

      <div className={styles["description-section"]}>
        <span>{description}</span>
      </div>
      <div className={styles["tags-section"]}>
        <span>{tags}</span>
      </div>
    </div>
  );
};
