export const AboutMeText =
  "I kickstarted my career in 2017 as a software engineer in Kerala, India, right after earning my bachelor’s in computer science. After spending over two years with two startups, I moved to San Francisco to pursue my master’s and spent five years in Silicon Valley, working with some amazing companies and leaders in tech. I’ve built over 10 professional web and mobile apps from scratch, and I’m always diving into interesting freelance gigs, research projects, or just tinkering with systems to see what breaks (and fixing them, of course!). Think of me like Bob the Builder, but for technology. In 2024, after getting married, I made the move to Sydney, Australia. My passion for building tech keeps me going, and it honestly never feels like work! Outside of coding, I’m a football fanatic (GGMU!), still adjusting to those 4 am match kickoffs with coffee in hand.";

export type Skill = {
  title: string;
  img: string;
  index?: number;
};

export type Company = {
  logo: string;
  location: string;
  designation: string;
  summary: string;
  term: string;
};

export const skills = [
  {
    title: "Javascript",
    img: "/JS_logo.svg",
  },
  {
    title: "Typescript",
    img: "/Ts_logo.svg",
  },
  {
    title: "React",
    img: "/React-logo.svg",
  },
  {
    title: "React Native",
    img: "/react-native-logo.svg",
  },
  {
    title: "NextJS",
    img: "/Nextjs-logo.svg",
  },
  {
    title: "NodeJS",
    img: "/NodeJS_logo.svg",
  },
  {
    title: "React Query",
    img: "/react-query-logo.svg",
  },
  {
    title: "HTML",
    img: "/html-logo.svg",
  },
  {
    title: "CSS",
    img: "/css-logo.svg",
  },
  {
    title: "Github",
    img: "/github-logo.svg",
  },
  {
    title: "Gitlab",
    img: "/gitlab-logo.svg",
  },
  {
    title: "D3.js",
    img: "/d3-logo.svg",
  },
  {
    title: "Redux",
    img: "/redux-logo.svg",
  },
  {
    title: "Python",
    img: "/python-logo.svg",
  },
  {
    title: "Figma",
    img: "/figma-logo.svg",
  },
  {
    title: "Expo",
    img: "/expo-logo.svg",
  },
  {
    title: "Android",
    img: "/android-logo.svg",
  },
  {
    title: "IOS (Xcode)",
    img: "/apple-logo.svg",
  },
];

export const companies = [
  {
    logo: "/autozone-logo.svg",
    location: "Memphis, USA",
    term: "1 year",
    designation: "Systems Engineer",
    summary:
      "AutoZone, Inc., founded in 1979, is the largest U.S. retailer of aftermarket automotive parts and accessories, with 7,140 stores across the U.S., Mexico, Puerto Rico, Brazil, and the U.S. Virgin Islands. I was hired to revamp their websites, autozone.com and autozonepro.com, and to establish guidelines for a new mobile application.",
  },
  {
    logo: "/splunk-logo.png",
    location: "San Francisco, USA",
    term: "2 years",
    designation: "Software Engineer",
    summary:
      "Splunk Inc., develops tools for searching, monitoring, and analyzing machine-generated data via a web-style interface. Its software captures, indexes, and correlates real-time data, generating graphs, reports, alerts, dashboards, and visualizations. I primarily worked on Splunk’s customer onboarding platform, integrating and connecting tenants with other Splunk applications.",
  },
  {
    logo: "/snaplogic-logo.svg",
    location: "San Francisco, USA (remote)",
    term: "5 months",
    designation: "Software Engineer Intern",
    summary:
      "SnapLogic is a commercial software company that offers integration platform as a service (iPaaS) tools for connecting cloud data, SaaS applications, and on-premises business software. I worked on their graphical interfaces for building data pipelines, with a key achievement being the delivery of a system capable of generating a UI from a given pipeline.",
  },
  {
    logo: "/usf-logo.png",
    location: "San Francisco, USA",
    term: "1.5 years",
    designation: "Research Assistant / Software Engineer",
    summary:
      "I worked as a research assistant during my Master’s degree with Dr. Alark Joshi, focusing on developing charts and visualizations optimized for small screen devices. I also contributed to building a website and mobile app for creating, sharing, and accessing recitations for the universities english department.",
  },
  {
    logo: "/webdura-logo.png",
    location: "Kerala, India",
    term: "1 year",
    designation: "Sr. Software Engineer",
    summary:
      "I was hired by Webdura, one of India’s top digital marketing agencies, to lead the development of a custom internal website and mobile application for a major global client, focusing on enhancing sales and customer engagement strategies.",
  },
  {
    logo: "/hubspire-logo.svg",
    location: "New York, USA (remote)",
    term: "1 year",
    designation: "Software Engineer",
    summary:
      "I began my career at Hubspire, designing and developing single-page web applications and mobile apps for a range of clients, including startups, small and medium-sized businesses, Fortune 500 companies, universities, public institutions, and governments.",
  },
];
