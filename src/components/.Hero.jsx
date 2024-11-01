import React from "react";
import photo from "../assets/img/photo.png";
import TypewriterEffect from "./TypewriterEffect";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="bg-myBgColor top-0">
        <div
          className="md:flex pt-8"
          style={{ backgroundColor: "rgba(135, 34, 57, 0.15)" }}
        >
          <div className="flex flex-col items-center justify-center h-[37.5rem] text-white text-center px-4 md:w-[60%] md:h-[32rem]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 py-2">
              Hello! I'm{" "}
              <span className="text-myPrimary">John Aaron Apayong</span>
            </h1>
            {/* <p className="mb-6 text-lg md:text-xl max-w-xl py-2">
            a dedicated software developer in my 3rd year of college. I love
            transforming concepts into reality using technologies like HTML,
            CSS, JavaScript, Java, Dart, and more. Let's create something
            amazing together.
          </p> */}
            <TypewriterEffect />
            <a
              href="#about"
              className="flex items-center bg-myPrimary text-gray-900 py-2 px-6 rounded-md hover:bg-mySecondary transition hover:text-white"
            >
              View my work{" "}
              <FaArrowRight className="ml-2 mt-[.2rem] text-[.9rem]" />
            </a>
          </div>
          <div className="hidden md:block text-white flex-auto relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-auto">
              <img src={photo} alt="John Aaron Apayong" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
import React, { useEffect, useState } from "react";

// Define the technology data with names and categories
const techData = [
  { file: "css-3.svg", name: "CSS 3", category: "frontend" },
  { file: "express-js.svg", name: "Express.js", category: "backend" },
  { file: "figma.svg", name: "Figma", category: "others" },
  { file: "flutter.svg", name: "Flutter", category: "frontend" },
  { file: "html-5.svg", name: "HTML 5", category: "frontend" },
  { file: "java.svg", name: "Java", category: "backend" },
  { file: "javascript.svg", name: "JavaScript", category: "frontend" },
  { file: "mongodb.svg", name: "MongoDB", category: "backend" },
  { file: "mysql.svg", name: "MySQL", category: "backend" },
  { file: "node-js.svg", name: "Node.js", category: "backend" },
  { file: "photoshop-cc.svg", name: "Photoshop CC", category: "others" },
  { file: "php.svg", name: "PHP", category: "backend" },
  { file: "react.svg", name: "React", category: "frontend" },
  { file: "tailwind-css.svg", name: "Tailwind CSS", category: "frontend" },
];

const SkillSets = () => {
  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    const importSvgs = async () => {
      const importedSvgs = await Promise.all(
        techData.map(async (tech) => {
          const svg = await import(`../assets/svg/${tech.file}`);
          return { img: svg.default, name: tech.name, category: tech.category };
        })
      );
      setSvgs(importedSvgs);
    };

    importSvgs();
  }, []);

  // Categorize technologies
  const categories = svgs.reduce((acc, tech) => {
    acc[tech.category] = acc[tech.category] || [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <div className="mx-auto p-4">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-bold mb-2 capitalize">
            {category} Technologies
          </h3>
          <div className="flex flex-wrap space-x-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-auto w-[60px] max-w-[100%] object-contain"
                />
                <span className="mt-2 text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSets;
*/
