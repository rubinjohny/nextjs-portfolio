"use client";

import TypewriterComponent from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

import styles from "./styles.module.css";

export const TypeWriter = () => {
  const stringSplitter = (str: string) => {
    const splitter = new GraphemeSplitter();
    const s = splitter.splitGraphemes(str);
    return Array.from(s) as any as string;
  };

  return (
    <>
      <TypewriterComponent
        options={{
          autoStart: true,
          loop: true,
          stringSplitter,
          wrapperClassName: styles["tw-wrapper"],
          deleteSpeed: 0,
        }}
        onInit={(tw) => {
          tw.typeString("G'day mate 👋")
            .pauseFor(500)
            .deleteAll()
            .typeString("I'm a front-end software engineer")
            .pauseFor(500)
            .deleteAll()
            .typeString("I can build Websites")
            .pauseFor(500)
            .deleteChars(8)
            .typeString("Mobile Apps")
            .pauseFor(500)
            .deleteAll()
            .typeString("I think <strong>Javascript</strong>")
            .pauseFor(500)
            .deleteChars(10)
            .typeString("<strong>React</strong>")
            .pauseFor(500)
            .typeString("<strong>Native</strong>")
            .pauseFor(500)
            .deleteChars(11)
            .typeString("<strong>NextJS</strong>")
            .pauseFor(500)
            .deleteAll()
            .typeString("I spent the last 5 years in the US")
            .pauseFor(500)
            .deleteAll()
            .typeString("Now exploring the land down under!")
            .pauseFor(1000)
            .start();
        }}
      />
    </>
  );
};
