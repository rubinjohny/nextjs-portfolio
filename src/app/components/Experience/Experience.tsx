import styles from "./styles.module.css";
import ExperienceCarousel from "@/app/components/ExperienceCarousel/ExperienceCarousel";
import { companies, Company } from "@/app/utils/data/experience";
import { PersonBadge, LocationIcon, CalendarIcon } from "@/app/utils/icons";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";

const CompanyCard = ({
  logo,
  designation,
  location,
  summary,
  term,
}: Company) => {
  return (
    <div className={styles["company-card"]}>
      <div className={styles["company-logo-container"]}>
        <Image alt="logo" src={logo} width={0} height={0} sizes="100vw" />
      </div>
      <>
        <div className={styles["sub-title-cont"]}>
          <PersonBadge color="#000" size={32} />
          <span>{designation}</span>
        </div>
        <div className={styles["term-loc-cont"]}>
          <div>
            <LocationIcon color="#6a6a6a" size={24} />
            <span>{location}</span>
          </div>
          <div>
            <CalendarIcon color="#6a6a6a" size={24} />
            <span>{term}</span>
          </div>
        </div>
      </>

      <div className={styles["summary-cont"]}>{summary}</div>
    </div>
  );
};

const OPTIONS: EmblaOptionsType = { containScroll: false };

const experienceCards = companies.map((company, i) => (
  <CompanyCard
    key={i}
    logo={company.logo}
    summary={company.summary}
    designation={company.designation}
    location={company.location}
    term={company.term}
  />
));

export const Experience = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title-section"]}>
        <span>Experience</span>
      </div>
      <ExperienceCarousel slides={experienceCards} options={OPTIONS} />
    </div>
  );
};
