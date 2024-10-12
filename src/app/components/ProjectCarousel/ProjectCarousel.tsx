import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./SelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const ProjectCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <>
      <div className={styles["viewport"]} ref={emblaRef}>
        <div className={styles["container"]}>
          {slides.map((slide, index) => (
            <div className={styles["slide"]} key={index}>
              <Image
                src={slide}
                alt={slide}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        <div className={styles["controls"]}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
