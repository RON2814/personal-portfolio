import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  const [text] = useTypewriter({
    words: [
      "Software Dev",
      "Graphic Designer",
      "Web Developer",
      "Full-Stack Dev",
    ],
    loop: true,
    typeSpeed: 120,
  });

  return (
    <h1 className="text-2xl md:text-4xl mb-6 py-2 font-bold">
      I'm a <span className="text-myPrimary">{text}</span>
      <span>
        <Cursor cursorStyle="|" cursorColor="#D897AA" />
      </span>
    </h1>
  );
};

export default TypewriterEffect;
