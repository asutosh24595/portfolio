import React, { useState, useEffect } from "react";
import { animated } from "react-spring";

const words = ["Web Developer", "Programmer", "Learner"]; 

const AnimatedText = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let timeout;
    if (isErasing) {
      timeout = setTimeout(() => {
        setDisplayedText(
          words[currentWord].substring(0, displayedText.length - 1)
        );
      }, erasingSpeed);
    } else {
      if (displayedText.length < words[currentWord].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            words[currentWord].substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, delayBetweenWords);
      }
    }

    if (isErasing && displayedText === "") {
      setIsErasing(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentWord]);

  return (
    <span className="md:text-4xl text-xl font-bold mr-2">
      I am a <animated.span><p className="inline text-sky-700">{displayedText}</p></animated.span>
    </span>
  );
};

export default AnimatedText;
