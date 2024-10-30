import React from "react";
import { ReactComponent as Css3 } from "../assets/svg/css-3.svg";
import { ReactComponent as ExpressJs } from "../assets/svg/express-js.svg";
import { ReactComponent as Figma } from "../assets/svg/figma.svg";

const SkillSets = () => {
  const techData = [
    { file: Css3, name: "CSS 3", category: "frontend" },
    { file: ExpressJs, name: "Express.js", category: "backend" },
    { file: Figma, name: "Figma", category: "others" },
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
  return <div>SkillSets</div>;
};

export default SkillSets;

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
