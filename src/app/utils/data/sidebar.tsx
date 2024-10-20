import {
  RubinIcon,
  AboutIcon,
  ProjectsIcon,
  JourneyIcon,
  ResumeIcon,
  EmailIcon,
  LinkedInIcon,
  GithubIcon,
  InstaIcon,
} from "@/app/utils/icons";

export const MenuItems = [
  {
    text: "Rubin Johny",
    icon: <RubinIcon color="white" size={32} />,
    id: "landing",
  },
  {
    text: "About",
    icon: <AboutIcon color="white" size={36} />,
    id: "about-me",
  },
  {
    text: "Projects",
    icon: <ProjectsIcon color="white" size={32} />,
    id: "projects",
  },
  {
    text: "Journey",
    icon: <JourneyIcon color="white" size={32} />,
    id: "journey",
  },
  {
    text: "Resume",
    icon: <ResumeIcon color="white" size={32} />,
    id: "resume",
  },
];

export const ContactItems = [
  {
    icon: <EmailIcon color="white" size={36} />,
    href: "mailto: rubinjohny@gmail.com",
  },
  {
    icon: <LinkedInIcon color="white" size={36} />,
    href: "https://www.linkedin.com/in/rubinjohny/",
  },
  {
    icon: <GithubIcon color="white" size={36} />,
    href: "https://github.com/rubinjohny?tab=overview&from=2020-12-01&to=2020-12-31",
  },
  {
    icon: <InstaIcon color="white" size={36} />,
    href: "https://www.instagram.com/rubinjohny/",
  },
];
